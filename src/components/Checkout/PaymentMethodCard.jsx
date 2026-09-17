import { useState } from 'react'
import { Lock, QrCode, ShieldCheck } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import { paymentMethods } from '../../data/checkoutData'
import './CheckoutCards.css'
import './PaymentMethodCard.css'

export default function PaymentMethodCard({ finalTotal, onConfirm }) {
  const [selected, setSelected] = useState(paymentMethods.find((m) => m.default)?.id ?? paymentMethods[0].id)
  const [agreed, setAgreed] = useState(true)
  const [upiId, setUpiId] = useState('')

  return (
    <section className="checkout-card checkout-card--step3">
      <div className="checkout-card__head">
        <span className="checkout-card__number">3</span>
        <h2>Select Payment Mode</h2>
        <Badge tone="outline" icon={Lock}>
          256-Bit Bank Encrypted
        </Badge>
      </div>

      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <div key={method.id} className={`payment-method ${selected === method.id ? 'is-active' : ''}`}>
            <button
              type="button"
              className="payment-method__head"
              onClick={() => setSelected(method.id)}
              aria-pressed={selected === method.id}
            >
              <span className="payment-method__radio" aria-hidden="true" />
              <span className="payment-method__title">
                {method.title}
                {method.badge && <Badge tone={method.badgeTone ?? 'secondary'}>{method.badge}</Badge>}
              </span>
              {method.logos && (
                <span className="payment-method__logos">
                  {method.logos.map((logo) => (
                    <span key={logo}>{logo}</span>
                  ))}
                </span>
              )}
            </button>
            <p className="payment-method__note">{method.note}</p>

            {method.id === 'upi' && selected === 'upi' && (
              <div className="upi-panel">
                <div className="upi-panel__qr">
                  <QrCode aria-hidden="true" />
                  <span>Scan &amp; Pay</span>
                </div>
                <div className="upi-panel__form">
                  <span className="upi-panel__or">Or enter registered virtual payment address (UPI ID)</span>
                  <div className="upi-panel__row">
                    <input
                      type="text"
                      placeholder="e.g. yourname@okhdfcbank / 9876543210@paytm"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                    <Button variant="secondary" size="sm">
                      Verify
                    </Button>
                  </div>
                  <p className="upi-panel__savings">✓ Special ₹128 instant checkout discount applied with UPI</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <label className="safety-checkbox">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>
          <strong>Statutory Safety Protocol:</strong> I hereby certify that all fireworks purchased will be
          discharged in open areas under strict adult supervision following CSIR-NEERI green safety guidelines and
          local municipal hours.
        </span>
      </label>

      <Button variant="primary" icon={Lock} fullWidth className="checkout-pay-btn" disabled={!agreed} onClick={onConfirm}>
        Pay ₹{finalTotal.toLocaleString('en-IN')} &amp; Confirm Sivakasi Order
      </Button>

      <div className="checkout-pay-trust">
        <span>✓ No Hidden Charges</span>
        <span>✓ Official Factory Invoice</span>
        <span className="checkout-pay-trust__transit">
          <ShieldCheck aria-hidden="true" />
          100% Transit Safe
        </span>
      </div>
    </section>
  )
}
