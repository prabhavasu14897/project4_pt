import { MapPin, Phone, ShieldCheck, CreditCard } from 'lucide-react'
import './Footer.css'

const FIREWORKS_LINKS = [
  'One Sound Traditional Crackers',
  'Electric & High-Glow Sparklers',
  'Multi-Color Flower Pots & Chakras',
  'Sky Flashers & Fancy 120-Shots',
  'VIP Family Mega Gift Boxes',
  'B2B Wholesale Price List (PDF)',
]

const ASSISTANCE_LINKS = [
  'Green Cracker QR Verification',
  'Pincode Doorstep Delivery Checker',
  'Diwali Safe Handling Guidelines',
  'Shockproof Transport Logistics',
  'Cancellation & Refund Policies',
  'Terms of Festive Service',
]

const PAYMENT_BADGES = ['UPI (GPay / PhonePe)', 'Visa / Mastercard', 'Verified COD']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__brand-head">
            <span className="site-footer__mark">
              <img src="/images/logo.png" alt="" aria-hidden="true" />
            </span>
            <span>Krishna Pyar Crackers</span>
          </div>
          <p>
            Direct from Sivakasi, Tamil Nadu—India&rsquo;s cracker capital. Crafting safe, luminous,
            low-smoke CSIR-NEERI approved green celebrations for Indian homes, institutions, and
            wholesale festivals since 1998.
          </p>
          <p className="site-footer__contact">
            <MapPin aria-hidden="true" />
            Sivakasi Bypass Road, Tamil Nadu 626125
          </p>
          <p className="site-footer__contact">
            <Phone aria-hidden="true" />
            Direct Order Hotline: +91 9940649206
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Festive fireworks">
          <h3>Festive Fireworks</h3>
          <ul>
            {FIREWORKS_LINKS.map((link) => (
              <li key={link}>
                <a href="#catalog">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Buyer assistance">
          <h3>Buyer Assistance</h3>
          <ul>
            {ASSISTANCE_LINKS.map((link) => (
              <li key={link}>
                <a href="#catalog">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__compliance">
          <h3>Supreme Court Compliance</h3>
          <div className="site-footer__compliance-box">
            <p className="site-footer__compliance-title">
              <ShieldCheck aria-hidden="true" />
              100% CSIR-NEERI Green Certified
            </p>
            <p>
              All our crackers are formulated without barium salts and strictly adhere to supreme court
              environmental safety decibels. Scan the NEERI QR on packaging for verified lab
              formulations.
            </p>
          </div>

          <p className="site-footer__gateways-label">Secure Direct Gateways</p>
          <div className="site-footer__payments">
            {PAYMENT_BADGES.map((badge) => (
              <span key={badge}>
                <CreditCard aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-row">
          <p>© 2025 Krishna Pyar Crackers. All Rights Reserved. Sivakasi, Tamil Nadu, India.</p>
          <p className="site-footer__bottom-links">
            <span>Designed for Safe Festive Celebrations</span>
            <a href="#catalog">Privacy Policy</a>
            <a href="#catalog">Terms &amp; Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
