import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/catalog'

const CartContext = createContext(null)
const STORAGE_KEY = 'kpc-cart'

const byId = Object.fromEntries(products.map((p) => [p.id, p]))

// Seeded to match the approved landing-page basket by default; real interactions take it from here.
const INITIAL_ITEMS = [
  { id: 'kp-spk-010', qty: 2 },
  { id: 'kp-fp-035', qty: 1 },
  { id: 'kp-gift-45', qty: 1 },
]

function hydrateSeed(entries) {
  return entries
    .map(({ id, qty }) => {
      const product = byId[id]
      if (!product) return null
      return {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        mrp: product.mrp,
        detailSlug: product.detailSlug,
        qty,
      }
    })
    .filter(Boolean)
}

function loadStoredCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null
    return parsed
  } catch {
    return null
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadStoredCart() ?? hydrateSeed(INITIAL_ITEMS))
  const [lastAddedId, setLastAddedId] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore write failures (private browsing, storage full, etc.)
    }
  }, [items])

  const addItem = useCallback((productOrId, qty = 1) => {
    const product = typeof productOrId === 'string' ? byId[productOrId] : productOrId
    if (!product) return

    setItems((current) => {
      const existing = current.find((i) => i.id === product.id)
      if (existing) {
        return current.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...current,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          mrp: product.mrp,
          detailSlug: product.detailSlug,
          qty,
        },
      ]
    })
    setLastAddedId(product.id)
  }, [])

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    setItems((current) => {
      if (qty < 1) return current.filter((i) => i.id !== id)
      return current.map((i) => (i.id === id ? { ...i, qty } : i))
    })
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const mrpTotal = items.reduce((sum, i) => sum + i.mrp * i.qty, 0)
    const savings = mrpTotal - subtotal
    return { itemCount, subtotal, mrpTotal, savings }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      totals,
      lastAddedId,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
    }),
    [items, addItem, removeItem, updateQty, clearCart, totals, lastAddedId, drawerOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
