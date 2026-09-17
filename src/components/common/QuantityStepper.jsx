import { Minus, Plus } from 'lucide-react'
import './QuantityStepper.css'

export default function QuantityStepper({ value, onDecrease, onIncrease, label }) {
  return (
    <div className="qty-stepper" role="group" aria-label={label ?? 'Quantity'}>
      <button type="button" className="qty-stepper__btn" onClick={onDecrease} aria-label="Decrease quantity">
        <Minus aria-hidden="true" />
      </button>
      <span className="qty-stepper__value">{value}</span>
      <button type="button" className="qty-stepper__btn" onClick={onIncrease} aria-label="Increase quantity">
        <Plus aria-hidden="true" />
      </button>
    </div>
  )
}
