import { MessageCircle } from 'lucide-react'
import './WhatsAppFab.css'

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href="https://wa.me/919940649206"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" />
      <span className="whatsapp-fab__label">Order on WhatsApp: +91 9940649206</span>
    </a>
  )
}
