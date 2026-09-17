import { CheckCircle2, PartyPopper, MessageCircleMore, Gift, Printer, Truck } from 'lucide-react'
import Button from '../common/Button'
import { order } from '../../data/orderConfirmationData'
import './ConfirmationBanner.css'

export default function ConfirmationBanner() {
  return (
    <section className="confirmation-banner">
      <div className="container confirmation-banner__row">
        <div className="confirmation-banner__main">
          <span className="confirmation-banner__check">
            <CheckCircle2 aria-hidden="true" />
          </span>
          <div>
            <span className="confirmation-banner__tag">
              <PartyPopper aria-hidden="true" />
              Sivakasi Direct Factory Confirmed
            </span>
            <h1>Order Confirmed! Thank You, {order.customerName}!</h1>
            <p>
              Your Sivakasi direct festival consignment <strong>#{order.id}</strong> has been received and routed
              to our central godown.
            </p>

            <div className="confirmation-banner__actions">
              <Button variant="tertiary" icon={MessageCircleMore}>
                Track Live on WhatsApp
              </Button>
              <Button variant="primary" icon={Gift}>
                Pre-Book For Diwali Gift (10% Off)
              </Button>
              <Button variant="ghost" icon={Printer}>
                Print Receipt
              </Button>
            </div>
          </div>
        </div>

        <div className="confirmation-banner__dispatch">
          <span>Estimated Dispatch</span>
          <strong>{order.estimatedDispatch}</strong>
          <span className="confirmation-banner__logistics">
            <Truck aria-hidden="true" />
            {order.logisticsNote}
          </span>
        </div>
      </div>
    </section>
  )
}
