import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Phone,
  KeyRound,
  ShoppingCart,
  UserRound,
  ChevronDown,
  ShieldCheck,
  Truck,
  MessageCircleMore,
  BadgeCheck,
  Menu,
  Sun,
  Moon,
} from 'lucide-react'
import useTheme from '../../hooks/useTheme'
import { useCart } from '../../context/CartContext'
import './Header.css'

const NAV_ITEMS = [
  'All Categories',
  'One Sound Crackers',
  'Electric & Colour Sparklers',
  'Flower Pots & Fountains',
  'Fancy Aerial Shots',
  'Festive Gift Boxes & Combos',
  'Bulk & Wholesale (B2B)',
  'Green Crackers Guide',
]

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: '100% Genuine Sivakasi Green Crackers (CSIR-NEERI Certified)' },
  { icon: ShieldCheck, label: 'Safe Transport & Shockproof Packaging' },
  { icon: MessageCircleMore, label: 'Instant WhatsApp Order Tracking' },
  { icon: Truck, label: 'Verified UPI & COD Options' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const { totals, lastAddedId, openDrawer } = useCart()
  const [bump, setBump] = useState(false)

  useEffect(() => {
    if (lastAddedId === null) return
    setBump(true)
    const id = setTimeout(() => setBump(false), 400)
    return () => clearTimeout(id)
  }, [lastAddedId])

  return (
    <header className="site-header">
      <div className="announce-bar">
        <div className="container announce-bar__row">
          <p className="announce-bar__message">
            Diwali Mega Factory Sale: Flat 80% Off Sivakasi Direct Orders
            <span className="announce-bar__divider" aria-hidden="true">
              •
            </span>
            Free Doorstep Delivery over ₹3,000
            <span className="announce-bar__divider" aria-hidden="true">
              •
            </span>
            Hotline: +91 9940649206
          </p>
          {/* <div className="announce-bar__lang">
            <button type="button" className="announce-bar__lang-btn is-active">
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button type="button" className="announce-bar__lang-btn">
              தமிழ்
            </button>
          </div> */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={isDark}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      <div className="main-header">
        <div className="container main-header__row">
          <Link to="/" className="brand">
            <span className="brand__mark">
              <img src="/images/logo.png" alt="Krishna Pyar Crackers" />
            </span>
            <span className="brand__text">
              <span className="brand__name">Krishna Pyar</span>
              <span className="brand__tagline">Authentic Sivakasi Crackers</span>
            </span>
          </Link>

          <div className="search-bar">
            <Search className="search-bar__icon" aria-hidden="true" />
            <input
              type="search"
              className="search-bar__input"
              placeholder="Search 1000 Wala, Flower Pots, Electric..."
              aria-label="Search products"
            />
          </div>

          <div className="main-header__actions">
            <a className="helpline" href="tel:+919940649206">
              <Phone aria-hidden="true" />
              <span>
                <span className="helpline__label">Direct Helpline</span>
                <span className="helpline__number">+91 9940649206</span>
              </span>
            </a>

            <button type="button" className="header-action">
              <KeyRound aria-hidden="true" />
              <span>OTP Login</span>
            </button>

            <button
              type="button"
              className={`cart-pill ${bump ? 'is-bumping' : ''}`}
              onClick={openDrawer}
              aria-label="Open cart"
            >
              <ShoppingCart aria-hidden="true" />
              <span>
                {totals.itemCount} items | ₹{totals.subtotal.toLocaleString('en-IN')}
              </span>
            </button>

            <button type="button" className="header-action header-action--icon" aria-label="Account">
              <UserRound aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
        <div className="container main-nav__row">
          <ul className="main-nav__list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item}>
                <a href="#catalog" className="main-nav__link">
                  {item}
                  {index === 0 && <ChevronDown className="main-nav__chevron" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="trust-strip">
        <div className="container trust-strip__row">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <span key={label} className="trust-strip__item">
              <Icon aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
