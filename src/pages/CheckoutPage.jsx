import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutStepBar from '../components/Checkout/CheckoutStepBar'
import BuyerContactCard from '../components/Checkout/BuyerContactCard'
import DeliveryAddressCard from '../components/Checkout/DeliveryAddressCard'
import PaymentMethodCard from '../components/Checkout/PaymentMethodCard'
import OrderSummaryCard from '../components/Checkout/OrderSummaryCard'
import GuaranteeCard from '../components/Checkout/GuaranteeCard'
import { useCart } from '../context/CartContext'
import './CheckoutPage.css'

const RUSH_SECONDS = 18 * 60 + 36

function formatCountdown(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}m ${seconds.toString().padStart(2, '0')}s`
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { totals, clearCart } = useCart()
  const [secondsLeft, setSecondsLeft] = useState(RUSH_SECONDS)

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const finalTotal = Math.max(0, totals.subtotal - Math.round(totals.subtotal * 0.05))

  const handleConfirm = () => {
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <div className="checkout-page">
      <CheckoutStepBar activeStep={2} countdown={formatCountdown(secondsLeft)} />

      <div className="container checkout-page__layout">
        <div className="checkout-page__main">
          <BuyerContactCard />
          <DeliveryAddressCard />
          <PaymentMethodCard finalTotal={finalTotal} onConfirm={handleConfirm} />
        </div>

        <aside className="checkout-page__sidebar">
          <OrderSummaryCard />
          <GuaranteeCard />
        </aside>
      </div>
    </div>
  )
}
