import { ShieldCheck, MessageCircleMore } from 'lucide-react'
import Button from '../common/Button'
import './TrustBanner.css'

export default function TrustBanner() {
  return (
    <section className="trust-banner">
      <div className="container trust-banner__row">
        <div className="trust-banner__text">
          <ShieldCheck aria-hidden="true" className="trust-banner__icon" />
          <div>
            <h2>Direct Sivakasi Warehouse Guarantee</h2>
            <p>No brokers or middlemen markups. Pure factory-fresh stock manufactured in Sivakasi.</p>
          </div>
        </div>
        <Button variant="tertiary" icon={MessageCircleMore}>
          Live WhatsApp Order Desk
        </Button>
      </div>
    </section>
  )
}
