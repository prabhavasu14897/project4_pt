import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ShoppingBasket, Trash2, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import QuantityStepper from './QuantityStepper'
import Button from './Button'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, totals, updateQty, removeItem, drawerOpen, closeDrawer } = useCart()

  useEffect(() => {
    if (!drawerOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && closeDrawer()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen, closeDrawer])

  if (!drawerOpen) return null

  return (
    <div className="cart-drawer-overlay" onClick={closeDrawer}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} aria-label="Shopping basket">
        <div className="cart-drawer__head">
          <h2>
            <ShoppingBasket aria-hidden="true" />
            Your Festive Basket
            <span className="cart-drawer__count">{totals.itemCount}</span>
          </h2>
          <button type="button" className="cart-drawer__close" onClick={closeDrawer} aria-label="Close cart">
            <X aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBasket aria-hidden="true" />
            <p>Your basket is empty.</p>
            <span>Add some festive crackers to light up your Diwali!</span>
            <Button variant="primary" onClick={closeDrawer} as={Link} to="/">
              Explore Catalog
            </Button>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li key={item.id}>
                  {item.detailSlug ? (
                    <Link to={`/product/${item.detailSlug}`} onClick={closeDrawer}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                  ) : (
                    <img src={item.image} alt={item.title} />
                  )}
                  <div className="cart-drawer__item-info">
                    {item.detailSlug ? (
                      <Link to={`/product/${item.detailSlug}`} onClick={closeDrawer} className="cart-drawer__item-title">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="cart-drawer__item-title">{item.title}</span>
                    )}
                    <span className="cart-drawer__item-price">₹{item.price.toLocaleString('en-IN')} each</span>
                    <div className="cart-drawer__item-row">
                      <QuantityStepper
                        value={item.qty}
                        onDecrease={() => updateQty(item.id, item.qty - 1)}
                        onIncrease={() => updateQty(item.id, item.qty + 1)}
                        label={`${item.title} quantity`}
                      />
                      <button
                        type="button"
                        className="cart-drawer__remove"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <span className="cart-drawer__item-total">
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </span>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__totals">
              <div>
                <span>Catalog MRP</span>
                <span className="is-strike">₹{totals.mrpTotal.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span>Festive Savings</span>
                <span className="is-positive">−₹{totals.savings.toLocaleString('en-IN')}</span>
              </div>
              <div className="cart-drawer__totals-final">
                <span>Subtotal</span>
                <span>₹{totals.subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <Button as={Link} to="/checkout" variant="primary" icon={ShoppingCart} fullWidth onClick={closeDrawer}>
              Proceed to Checkout
            </Button>
            <Button variant="ghost" fullWidth onClick={closeDrawer}>
              Continue Shopping
            </Button>
          </>
        )}
      </aside>
    </div>
  )
}
