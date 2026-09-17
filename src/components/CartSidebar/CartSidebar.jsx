import { Link } from 'react-router-dom'
import { ShoppingBasket, Zap, CircleCheck, Tag, ShoppingCart } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import QuantityStepper from '../common/QuantityStepper'
import { useCart } from '../../context/CartContext'
import './CartSidebar.css'

const FREE_DELIVERY_THRESHOLD = 3000

export default function CartSidebar() {
  const { items, totals, updateQty, removeItem } = useCart()

  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - totals.subtotal)
  const progress = Math.min(100, (totals.subtotal / FREE_DELIVERY_THRESHOLD) * 100)
  const discountPercent = totals.mrpTotal > 0 ? Math.round((totals.savings / totals.mrpTotal) * 100) : 0

  return (
    <aside className="cart-sidebar">
      <div className="cart-sidebar__head">
        <h2>
          <ShoppingBasket aria-hidden="true" />
          Your Festive Basket
        </h2>
        <Badge tone="secondary">{totals.itemCount} items</Badge>
      </div>

      {items.length === 0 ? (
        <div className="cart-sidebar__empty">
          <ShoppingBasket aria-hidden="true" />
          <p>Your basket is empty</p>
          <span>Add crackers from the catalog to start your festive order.</span>
        </div>
      ) : (
        <>
          <div className="cart-sidebar__delivery">
            {remaining > 0 ? (
              <p>
                Add ₹{remaining.toLocaleString('en-IN')} for <strong>FREE Delivery</strong> ₹
                {totals.subtotal.toLocaleString('en-IN')} / ₹{FREE_DELIVERY_THRESHOLD.toLocaleString('en-IN')}
              </p>
            ) : (
              <p>
                <strong>FREE Delivery</strong> unlocked on this order!
              </p>
            )}
            <div className="cart-sidebar__progress">
              <span style={{ width: `${progress}%` }} />
            </div>
            <p className="cart-sidebar__delivery-note">
              Sivakasi factory shockproof transport with doorstep dispatches.
            </p>
          </div>

          <ul className="cart-sidebar__items">
            {items.map((item) => (
              <li key={item.id}>
                {item.detailSlug ? (
                  <Link to={`/product/${item.detailSlug}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
                <div className="cart-sidebar__item-info">
                  {item.detailSlug ? (
                    <Link to={`/product/${item.detailSlug}`} className="cart-sidebar__item-title">
                      {item.title}
                    </Link>
                  ) : (
                    <span className="cart-sidebar__item-title">{item.title}</span>
                  )}
                  <span className="cart-sidebar__item-meta">
                    ₹{item.price.toLocaleString('en-IN')} each
                  </span>
                  <QuantityStepper
                    value={item.qty}
                    onDecrease={() => updateQty(item.id, item.qty - 1)}
                    onIncrease={() => updateQty(item.id, item.qty + 1)}
                    label={`${item.title} quantity`}
                  />
                </div>
                <div className="cart-sidebar__item-actions">
                  <span className="cart-sidebar__item-price">
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </span>
                  <button
                    type="button"
                    className="cart-sidebar__item-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.title}`}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <dl className="cart-sidebar__totals">
            <div>
              <dt>Total Catalog MRP</dt>
              <dd className="is-strike">₹{totals.mrpTotal.toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Festive Discount (-{discountPercent}%)</dt>
              <dd className="is-positive">−₹{totals.savings.toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Green Delivery Charge</dt>
              <dd>
                {remaining > 0 ? (
                  <span className="cart-sidebar__promo">Add ₹{remaining.toLocaleString('en-IN')} more</span>
                ) : (
                  <>
                    <Badge tone="tertiary">Free</Badge> <span className="cart-sidebar__promo">Promo</span>
                  </>
                )}
              </dd>
            </div>
            <div className="cart-sidebar__totals-final">
              <dt>Final Payable</dt>
              <dd>₹{totals.subtotal.toLocaleString('en-IN')}</dd>
            </div>
          </dl>

          <p className="cart-sidebar__savings">
            <Tag aria-hidden="true" />
            Total You Save on Sivakasi Direct: ₹{totals.savings.toLocaleString('en-IN')}
          </p>

          <Button as={Link} to="/checkout" variant="primary" icon={Zap} fullWidth>
            Express UPI / OTP Checkout
          </Button>
          <Button variant="ghost" icon={CircleCheck} fullWidth className="cart-sidebar__cod">
            Cash on Delivery (Verified OTP)
          </Button>
        </>
      )}
    </aside>
  )
}
