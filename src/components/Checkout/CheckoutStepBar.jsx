import { ShoppingCart, ShieldCheck, Timer } from 'lucide-react'
import { checkoutSteps } from '../../data/checkoutData'
import Badge from '../common/Badge'
import './CheckoutStepBar.css'

export default function CheckoutStepBar({ activeStep, countdown }) {
  return (
    <div className="checkout-stepbar">
      <div className="container checkout-stepbar__row">
        <div className="checkout-stepbar__title">
          <ShoppingCart aria-hidden="true" />
          <div>
            <h1>
              Express Festive Checkout <Badge tone="secondary">Fast Lane</Badge>
            </h1>
            <p>Direct dispatch via Authorized Sivakasi Special Logistics Line</p>
          </div>
        </div>

        <ol className="checkout-stepbar__steps">
          {checkoutSteps.map((step) => (
            <li key={step.id} className={step.id === activeStep ? 'is-active' : ''}>
              {step.id}. {step.label}
            </li>
          ))}
        </ol>
      </div>

      {countdown && (
        <div className="checkout-rush">
          <div className="container checkout-rush__row">
            <span>
              <Timer aria-hidden="true" />
              Diwali Rush Hour: Orders confirmed in the next <strong>{countdown}</strong> get Priority Sivakasi Hub
              Packing today!
            </span>
            <span className="checkout-rush__tag">
              <ShieldCheck aria-hidden="true" />
              CSIR-NEERI Green QR Tagged Batches
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
