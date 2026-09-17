import { useState } from 'react'
import { ClipboardList, ChevronDown, CircleCheck } from 'lucide-react'
import ProductCard from './ProductCard'
import CartSidebar from '../CartSidebar/CartSidebar'
import { filterTabs, products } from '../../data/catalog'
import './CatalogSection.css'

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section className="catalog-section" id="catalog">
      <div className="container catalog-section__layout">
        <div className="catalog-main">
          <div className="catalog-toolbar">
            <h2 className="catalog-toolbar__title">
              <ClipboardList aria-hidden="true" />
              Festive Pre-Booking Catalog
            </h2>

            <label className="catalog-toolbar__sort">
              Sort by:
              <span className="catalog-toolbar__sort-value">
                Popularity &amp; Rating
                <ChevronDown aria-hidden="true" />
              </span>
            </label>
          </div>

          <div className="catalog-filters">
            {filterTabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                className={`catalog-filters__tab ${activeFilter === tab.id ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="catalog-safety">
            <span className="catalog-safety__label">Filter By Safety:</span>
            <button type="button" className="catalog-safety__chip">
              <CircleCheck aria-hidden="true" />
              Low Noise / Kids Safe
            </button>
            <button type="button" className="catalog-safety__chip">
              Medium Festive Sound
            </button>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <CartSidebar />
      </div>
    </section>
  )
}
