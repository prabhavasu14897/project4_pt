import { Smartphone, Mail, MessageCircleMore, CheckCircle2 } from 'lucide-react'
import Badge from '../common/Badge'
import { buyer } from '../../data/checkoutData'
import './CheckoutCards.css'

export default function BuyerContactCard() {
  return (
    <section className="checkout-card checkout-card--step1">
      <div className="checkout-card__head">
        <span className="checkout-card__number">1</span>
        <h2>Buyer Contact &amp; Verification</h2>
        <Badge tone="tertiary" icon={CheckCircle2}>
          OTP Verified
        </Badge>
      </div>

      <div className="buyer-grid">
        <div className="buyer-field">
          <span className="buyer-field__label">
            <Smartphone aria-hidden="true" />
            Registered Mobile
          </span>
          <span className="buyer-field__value">{buyer.mobile}</span>
        </div>
        <div className="buyer-field">
          <span className="buyer-field__label">
            <Mail aria-hidden="true" />
            Invoice &amp; Tracking Email
          </span>
          <span className="buyer-field__value">{buyer.email}</span>
        </div>
      </div>

      <div className="buyer-note">
        <span>
          <MessageCircleMore aria-hidden="true" />
          {buyer.note}
        </span>
        <button type="button" className="checkout-card__link">
          Change
        </button>
      </div>
    </section>
  )
}
