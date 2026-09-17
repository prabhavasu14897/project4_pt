import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, ShoppingCart, Zap, MapPin, Factory, PackageCheck, MessageCircleMore, Leaf, Check } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import QuantityStepper from '../common/QuantityStepper'
import { useCart } from '../../context/CartContext'
import './PurchasePanel.css'

const FEATURE_ICONS = { Factory, PackageCheck, MessageCircleMore, Leaf }

export default function PurchasePanel({ detail }) {
  const [selectedPack, setSelectedPack] = useState(detail.packs.find((p) => p.default)?.id ?? detail.packs[0].id)
  const [quantity, setQuantity] = useState(1)
  const [pincode, setPincode] = useState('')
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const navigate = useNavigate()

  const activePack = detail.packs.find((p) => p.id === selectedPack) ?? detail.packs[0]
  const stockPercent = Math.round((detail.stock.remaining / detail.stock.total) * 100)

  const cartItem = {
    id: `${detail.slug}-${activePack.id}`,
    title: activePack.name === '1 Box Pack' ? detail.title.split(' - ')[0] : `${detail.title.split(' - ')[0]} (${activePack.name})`,
    image: detail.gallery.main,
    price: activePack.price,
    mrp: activePack.mrp,
    detailSlug: detail.slug,
  }

  const handleAdd = () => {
    addItem(cartItem, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  const handleBuyNow = () => {
    addItem(cartItem, quantity)
    navigate('/checkout')
  }

  return (
    <div className="purchase-panel">
      <div className="purchase-panel__eyebrow">
        <span>{detail.eyebrow}</span>
        <span className="purchase-panel__dot" aria-hidden="true">
          ·
        </span>
        <span>SKU: {detail.sku}</span>
        <Badge tone="outline" className="purchase-panel__batch">
          {detail.batchTag}
        </Badge>
      </div>

      <h1 className="purchase-panel__title">{detail.title}</h1>

      <div className="purchase-panel__rating">
        <span className="purchase-panel__stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden="true" fill="currentColor" />
          ))}
        </span>
        <strong>{detail.rating.value}</strong>
        <span>({detail.rating.count} verified festive buyers)</span>
        <Badge tone="neutral" className="purchase-panel__weekly">
          {detail.weeklyOrders}
        </Badge>
      </div>

      <div className="purchase-panel__price-box">
        <div className="purchase-panel__price-row">
          <span className="purchase-panel__price-label">{detail.price.label}</span>
          <span className="purchase-panel__price-current">₹{activePack.price}</span>
          <span className="purchase-panel__price-mrp">₹{activePack.mrp}</span>
          <Badge tone="tertiary">
            Save ₹{activePack.mrp - activePack.price} ({detail.price.savePercent}% OFF)
          </Badge>
        </div>
        <p className="purchase-panel__price-note">✓ {detail.price.note}</p>

        <div className="purchase-panel__stock">
          <div className="purchase-panel__stock-row">
            <span>
              In Stock: <strong>{detail.stock.remaining} Packs Remaining</strong> · {detail.stock.location}
            </span>
            <span className="purchase-panel__stock-dispatch">{detail.stock.dispatch}</span>
          </div>
          <div className="purchase-panel__stock-bar">
            <span style={{ width: `${stockPercent}%` }} />
          </div>
        </div>
      </div>

      <h2 className="purchase-panel__section-label">Select Pack Configuration:</h2>
      <div className="purchase-panel__packs">
        {detail.packs.map((pack) => (
          <button
            type="button"
            key={pack.id}
            className={`pack-option ${selectedPack === pack.id ? 'is-active' : ''}`}
            onClick={() => setSelectedPack(pack.id)}
          >
            {pack.badge && (
              <Badge tone={pack.badgeTone} className="pack-option__badge">
                {pack.badge}
              </Badge>
            )}
            <span className="pack-option__radio" aria-hidden="true" />
            <span className="pack-option__name">{pack.name}</span>
            <span className="pack-option__meta">{pack.meta}</span>
            <span className="pack-option__price">
              ₹{pack.price} <span>₹{pack.mrp}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="purchase-panel__actions">
        <QuantityStepper
          value={quantity}
          onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          onIncrease={() => setQuantity((q) => q + 1)}
          label="Quantity"
        />
        <Button variant={added ? 'tertiary' : 'primary'} icon={added ? Check : ShoppingCart} onClick={handleAdd}>
          {added ? 'Added to Cart' : 'Add to Festive Cart'}
        </Button>
        <Button variant="secondary" icon={Zap} onClick={handleBuyNow}>
          1-Click UPI Buy
        </Button>
      </div>

      <div className="delivery-check">
        <div className="delivery-check__head">
          <MapPin aria-hidden="true" />
          <span>{detail.delivery.title}</span>
          <span className="delivery-check__partner">{detail.delivery.partner}</span>
        </div>
        <div className="delivery-check__row">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder={detail.delivery.placeholder}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
            aria-label="Delivery pincode"
          />
          <Button variant="outline" size="sm">
            Check
          </Button>
        </div>
        <p className="delivery-check__note">{detail.delivery.note}</p>
      </div>

      <div className="feature-badges">
        {detail.featureBadges.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon]
          return (
            <div className="feature-badge" key={feature.lines.join('-')}>
              <Icon aria-hidden="true" />
              <span>
                <strong>{feature.lines[0]}</strong>
                <em>{feature.lines[1]}</em>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
