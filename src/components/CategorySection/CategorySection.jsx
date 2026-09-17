import { Volume2, Sparkles, Flower2, Rocket, Gift, Leaf } from 'lucide-react'
import Badge from '../common/Badge'
import { categories } from '../../data/catalog'
import './CategorySection.css'

const ICONS = { Volume2, Sparkles, Flower2, Rocket, Gift, Leaf }

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="container">
        <div className="category-section__head">
          <div>
            <p className="category-section__kicker">Curated Festive Range</p>
            <h2 className="category-section__title">Explore by Festive Category</h2>
          </div>
          <p className="category-section__note">
            Every single item is CSIR-NEERI certified Sivakasi produce with tamper-proof laboratory green
            seals.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const Icon = ICONS[category.icon]
            return (
              <button type="button" key={category.id} className="category-card">
                <span className={`category-card__icon category-card__icon--${category.badgeTone}`}>
                  <Icon aria-hidden="true" />
                </span>
                <Badge tone={category.badgeTone}>{category.badge}</Badge>
                <span className="category-card__title">{category.title}</span>
                <span className="category-card__meta">{category.meta}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
