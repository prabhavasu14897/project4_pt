import { MapPin, ShieldCheck, QrCode, Bell, CheckCircle2, Phone, Mail } from 'lucide-react'
import Badge from '../common/Badge'
import { deliveryAddress, qrVerification, safetyAdvisory, helpline } from '../../data/orderConfirmationData'
import './DeliveryInfoPanel.css'

export default function DeliveryInfoPanel() {
  return (
    <div className="delivery-info-panel">
      <section className="info-card">
        <div className="info-card__head">
          <h2>
            <MapPin aria-hidden="true" />
            Delivery Address
          </h2>
          <Badge tone="tertiary">Verified Pincode</Badge>
        </div>
        <p className="delivery-address__name">{deliveryAddress.name}</p>
        {deliveryAddress.lines.map((line) => (
          <p className="delivery-address__line" key={line}>
            {line}
          </p>
        ))}
        <p className="delivery-address__contact">Contact: {deliveryAddress.contact}</p>
        <p className="delivery-address__note">{deliveryAddress.note}</p>
      </section>

      <section className="info-card">
        <div className="info-card__head">
          <h2>
            <ShieldCheck aria-hidden="true" />
            {qrVerification.title}
          </h2>
          <Badge tone="tertiary">Supreme Court Approved</Badge>
        </div>
        <p className="info-card__body">{qrVerification.body}</p>
        <div className="qr-howto">
          <QrCode aria-hidden="true" />
          <div>
            <strong>How to Verify:</strong>
            <p>{qrVerification.howTo}</p>
          </div>
        </div>
      </section>

      <section className="info-card info-card--advisory">
        <h2>
          <Bell aria-hidden="true" />
          Diwali Safe Celebration Advisory
        </h2>
        <ul className="advisory-list">
          {safetyAdvisory.map((item) => (
            <li key={item.title}>
              <CheckCircle2 aria-hidden="true" />
              <p>
                <strong>{item.title}:</strong> {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="info-card">
        <h2>
          <Phone aria-hidden="true" />
          Dedicated Helplines
        </h2>
        <strong className="helpline-title">{helpline.title}</strong>
        <p className="helpline-hours">{helpline.hours}</p>
        <p className="helpline-contact">
          <Phone aria-hidden="true" />
          {helpline.phone}
        </p>
        <p className="helpline-contact">
          <Mail aria-hidden="true" />
          {helpline.email}
        </p>
      </section>
    </div>
  )
}
