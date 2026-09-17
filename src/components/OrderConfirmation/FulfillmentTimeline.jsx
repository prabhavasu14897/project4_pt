import { Check, Package, Truck, MapPin } from 'lucide-react'
import Badge from '../common/Badge'
import { order, timeline } from '../../data/orderConfirmationData'
import './FulfillmentTimeline.css'

const ICONS = [Check, Package, Truck, MapPin]

export default function FulfillmentTimeline() {
  return (
    <section className="fulfillment-timeline container">
      <div className="fulfillment-timeline__head">
        <div>
          <p className="fulfillment-timeline__kicker">Consignment Progress</p>
          <h2>Live Fulfillment Timeline</h2>
        </div>
        <Badge tone="outline">Tracking ID: {order.trackingId}</Badge>
      </div>

      <ol className="fulfillment-timeline__steps">
        {timeline.map((step, index) => {
          const Icon = ICONS[index]
          return (
            <li key={step.step} className={`is-${step.status}`}>
              <span className="fulfillment-timeline__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="fulfillment-timeline__status">{step.statusLabel}</span>
              <strong>
                {step.step}. {step.label}
              </strong>
              <span className="fulfillment-timeline__meta">{step.meta}</span>
              <span className="fulfillment-timeline__note">{step.note}</span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
