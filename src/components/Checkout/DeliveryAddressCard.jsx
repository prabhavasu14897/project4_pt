import { useState } from 'react'
import { MapPin, Package } from 'lucide-react'
import Badge from '../common/Badge'
import { deliveryAddress } from '../../data/checkoutData'
import './CheckoutCards.css'

export default function DeliveryAddressCard() {
  const [form, setForm] = useState({
    name: deliveryAddress.name,
    pincode: deliveryAddress.pincode,
    flat: deliveryAddress.flat,
    street: deliveryAddress.street,
    landmark: deliveryAddress.landmark,
    driverNote: deliveryAddress.driverNote,
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <section className="checkout-card checkout-card--step2">
      <div className="checkout-card__head">
        <span className="checkout-card__number">2</span>
        <h2>Sivakasi Transport &amp; Delivery Address</h2>
        <Badge tone="outline">Residential Delivery</Badge>
      </div>

      <div className="address-grid">
        <label className="address-field">
          <span>Recipient Full Name *</span>
          <input type="text" value={form.name} onChange={update('name')} />
        </label>
        <label className="address-field">
          <span>Delivery Pincode *</span>
          <div className="address-field__with-status">
            <input type="text" inputMode="numeric" maxLength={6} value={form.pincode} onChange={update('pincode')} />
            <span className="address-field__status">
              <span className="address-field__dot" aria-hidden="true" />
              Road Express Active
            </span>
          </div>
        </label>
      </div>

      <div className="address-route">
        <MapPin aria-hidden="true" />
        <div>
          <strong>{deliveryAddress.city}</strong>
          <span>{deliveryAddress.routeNote}</span>
        </div>
        <Badge tone="tertiary" className="address-route__badge">
          Free Delivery
        </Badge>
      </div>

      <div className="address-grid">
        <label className="address-field">
          <span>Flat / Door No. &amp; Apartment *</span>
          <input type="text" value={form.flat} onChange={update('flat')} />
        </label>
        <label className="address-field">
          <span>Street &amp; Area Name *</span>
          <input type="text" value={form.street} onChange={update('street')} />
        </label>
      </div>

      <label className="address-field">
        <span>Landmark (optional for speedy delivery)</span>
        <div className="address-field__icon-input">
          <MapPin aria-hidden="true" />
          <input type="text" value={form.landmark} onChange={update('landmark')} />
        </div>
      </label>

      <label className="address-field">
        <span>Special Delivery Instructions for Driver</span>
        <div className="address-field__icon-input">
          <Package aria-hidden="true" />
          <input type="text" value={form.driverNote} onChange={update('driverNote')} />
        </div>
      </label>
    </section>
  )
}
