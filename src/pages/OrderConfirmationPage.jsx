import ConfirmationBanner from '../components/OrderConfirmation/ConfirmationBanner'
import FulfillmentTimeline from '../components/OrderConfirmation/FulfillmentTimeline'
import ConsignmentManifest from '../components/OrderConfirmation/ConsignmentManifest'
import DeliveryInfoPanel from '../components/OrderConfirmation/DeliveryInfoPanel'
import ConfirmationCrossSell from '../components/OrderConfirmation/ConfirmationCrossSell'
import './OrderConfirmationPage.css'

export default function OrderConfirmationPage() {
  return (
    <div className="order-confirmation-page">
      <ConfirmationBanner />
      <FulfillmentTimeline />

      <div className="container order-confirmation-page__layout">
        <ConsignmentManifest />
        <DeliveryInfoPanel />
      </div>

      <ConfirmationCrossSell />
    </div>
  )
}
