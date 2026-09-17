import { CreditCard, CheckCircle2 } from 'lucide-react'
import Badge from '../common/Badge'
import { manifest, manifestTotals, payment, packaging } from '../../data/orderConfirmationData'
import './ConsignmentManifest.css'

export default function ConsignmentManifest() {
  return (
    <div className="consignment-manifest">
      <section className="manifest-card">
        <div className="manifest-card__head">
          <h2>Consignment Manifest</h2>
          <Badge tone="outline">{manifest.length} Packets Total</Badge>
        </div>

        <ul className="manifest-items">
          {manifest.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="manifest-items__info">
                <Badge tone="tertiary" className="manifest-items__tag">
                  {item.tag}
                </Badge>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </div>
              <div className="manifest-items__price">
                <Badge tone="urgency">{item.discount}</Badge>
                <span>₹{item.price.toLocaleString('en-IN')}</span>
                <span className="is-strike">₹{item.mrp.toLocaleString('en-IN')}</span>
                <span className="is-saved">Saved ₹{item.saved.toLocaleString('en-IN')}</span>
              </div>
            </li>
          ))}
        </ul>

        <dl className="manifest-totals">
          <div>
            <dt>Total Catalog MRP Value</dt>
            <dd className="is-strike">₹{manifestTotals.catalogMrp.toLocaleString('en-IN')}.00</dd>
          </div>
          <div>
            <dt>Sivakasi Factory Direct Mega Discount (-80%)</dt>
            <dd className="is-positive">−₹{manifestTotals.factoryDiscount.toLocaleString('en-IN')}.00</dd>
          </div>
          <div>
            <dt>{manifestTotals.packagingNote}</dt>
            <dd className="is-positive">Free (Diwali Offer)</dd>
          </div>
          <div>
            <dt>{manifestTotals.deliveryNote}</dt>
            <dd className="is-positive">Free</dd>
          </div>
          <div>
            <dt>GST (18% Integrated-B2C)</dt>
            <dd>₹{manifestTotals.gst.toFixed(2)} (Included)</dd>
          </div>
        </dl>

        <div className="manifest-final">
          <div>
            <strong>Total Paid</strong>
            <span>Inclusive of all duties &amp; freight</span>
          </div>
          <div className="manifest-final__amount">
            <strong>₹{manifestTotals.totalPaid.toLocaleString('en-IN')}.00</strong>
            <span>You Saved ₹{manifestTotals.savedToday.toLocaleString('en-IN')} Today!</span>
          </div>
        </div>
      </section>

      <section className="payment-bar">
        <span className="payment-bar__mode">
          <CreditCard aria-hidden="true" />
          <span>
            <em>Payment Mode</em>
            <strong>{payment.mode}</strong>
          </span>
        </span>
        <span className="payment-bar__clearance">
          <CheckCircle2 aria-hidden="true" />
          {payment.clearance}
        </span>
      </section>

      <section className="packaging-card">
        <div className="packaging-card__ring" style={{ '--pct': packaging.safePercent }}>
          <span>{packaging.safePercent}%</span>
          <em>Safe Ready</em>
        </div>
        <div className="packaging-card__body">
          <strong>{packaging.title}</strong>
          <p>{packaging.body}</p>
          <div className="packaging-card__badges">
            {packaging.badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
