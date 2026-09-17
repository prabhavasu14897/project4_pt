import { Link } from 'react-router-dom'
import { ClipboardList, Tag, CheckCircle2 } from 'lucide-react'
import Badge from '../common/Badge'
import { useCart } from '../../context/CartContext'
import './OrderSummaryCard.css'

const FREE_DELIVERY_THRESHOLD = 2000
const PROMO_CODE = 'SIVAKASI90'

export default function OrderSummaryCard() {
  const { items, totals } = useCart()

  const upiSavings = Math.round(totals.subtotal * 0.05)
  const freeDelivery = totals.subtotal > FREE_DELIVERY_THRESHOLD
  const finalPayable = Math.max(0, totals.subtotal - upiSavings)
  const totalSavings = totals.savings + upiSavings

  return (
    <section className="order-summary-card">
      <div className="order-summary-card__head">
        <h2>
          <ClipboardList aria-hidden="true" />
          Order Summary
          <span className="order-summary-card__count">{items.length} Products</span>
        </h2>
        <Link to="/" className="checkout-card__link">
          Modify Cart
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="order-summary-empty">
          Your basket is empty. <Link to="/">Browse the catalog</Link> to add festive crackers before checking out.
        </p>
      ) : (
        <>
          <ul className="order-summary-items">
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="order-summary-items__info">
                  <span className="order-summary-items__title">{item.title}</span>
                  <span className="order-summary-items__meta">
                    Qty: {item.qty} × ₹{item.price.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="order-summary-items__price">
                  <span>₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                  <span className="is-strike">₹{(item.mrp * item.qty).toLocaleString('en-IN')}</span>
                </div>
              </li>
            ))}
          </ul>

          <dl className="order-summary-totals">
            <div>
              <dt>Total Catalog Standard MRP</dt>
              <dd className="is-strike">₹{totals.mrpTotal.toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Factory Direct Discount</dt>
              <dd className="is-positive">−₹{totals.savings.toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Sivakasi Safe Express Road Freight</dt>
              <dd className="is-positive">{freeDelivery ? 'FREE' : `Orders > ₹${FREE_DELIVERY_THRESHOLD}`}</dd>
            </div>
            <div>
              <dt>Extra Instant UPI Pre-Payment Savings</dt>
              <dd className="is-positive">−₹{upiSavings.toLocaleString('en-IN')}</dd>
            </div>
          </dl>

          <div className="order-summary-savings">
            <Tag aria-hidden="true" />
            <span>Diwali Direct Factory Savings:</span>
            <strong>₹{totalSavings.toLocaleString('en-IN')}</strong>
          </div>

          <div className="order-summary-final">
            <span>Final Total Payable</span>
            <strong>₹{finalPayable.toLocaleString('en-IN')}</strong>
          </div>
          <p className="order-summary-final__note">Inclusive of 18% GST &amp; Insured Packing</p>

          <div className="order-summary-promo">
            <span>{PROMO_CODE}</span>
            <Badge tone="tertiary" icon={CheckCircle2}>
              Applied
            </Badge>
          </div>
        </>
      )}
    </section>
  )
}
