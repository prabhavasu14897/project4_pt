import { Zap, FileDown, Star, ShieldCheck, Clock3, ShoppingCart } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import './Hero.css'

const STATS = [
  { icon: Star, value: '4.9 / 5.0', label: '12,400+ Happy Families' },
  { icon: ShieldCheck, value: '100% Origin', label: 'Genuine Sivakasi Hub' },
  { icon: Clock3, value: '48 Hours', label: 'Prompt Dispatch Guarantee' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__row">
        <div className="hero__content">
          <div className="hero__flags">
            <Badge tone="urgency">Limited Festive Window</Badge>
            <span className="hero__flag-text">
              Diwali Special Closes Soon · Extra 10% Off on Prepaid UPI Orders
            </span>
          </div>

          <Badge tone="outline" className="hero__dispatch-badge">
            Direct Sivakasi Factory Dispatches
          </Badge>

          <h1 className="hero__headline">
            Light Up Your Celebrations with <span className="hero__accent">Authentic Sivakasi</span> Green
            Crackers
          </h1>

          <p className="hero__subhead">
            100% CSIR-NEERI Certified Eco-Friendly · Flat 80% Off Festive Pre-Booking. Safe, low-smoke,
            high-glow traditional fireworks delivered directly to your doorstep.
          </p>

          <div className="hero__ctas">
            <Button variant="primary" icon={Zap}>
              Shop Festive Combos
            </Button>
            <Button variant="secondary" icon={FileDown}>
              Download 2025 Price List PDF
            </Button>
            <Button variant="outline" size="sm">
              B2B Wholesale Inquiry
            </Button>
          </div>

          <ul className="hero__stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="hero__stat">
                <Icon className="hero__stat-icon" aria-hidden="true" />
                <span>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__deal">
          <div className="hero__deal-head">
            <span className="hero__deal-kicker">Mega Festive Steal</span>
            <Badge tone="secondary">Pre-Book Special</Badge>
          </div>

          <div className="hero__deal-media">
            <img src="/images/crackers.png" alt="Maha Royal Family Hamper" />
            <Badge tone="neutral" className="hero__deal-count">
              45 Assorted Items Box
            </Badge>
          </div>

          <h3 className="hero__deal-title">Maha Royal Family Hamper</h3>
          <p className="hero__deal-desc">
            All-in-one celebration kit with sparklers, pots, chorsa, whistles &amp; aerial shots direct
            from Sivakasi.
          </p>

          <div className="hero__deal-price-row">
            <div className="hero__deal-price">
              <span className="hero__deal-price-now">₹1,499</span>
              <span className="hero__deal-price-was">₹6,000</span>
            </div>
            <Badge tone="urgency">75% Saved</Badge>
          </div>

          <Button variant="primary" icon={ShoppingCart} fullWidth>
            Pre-Book Hamper Now
          </Button>
        </aside>
      </div>
    </section>
  )
}
