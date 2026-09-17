import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowRight, ShoppingCart, Check } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import { useCart } from '../../context/CartContext'
import './RelatedProducts.css'

export default function RelatedProducts({ related }) {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState(null)

  const handleAdd = (item) => {
    addItem(item, 1)
    setAddedId(item.id)
    setTimeout(() => setAddedId((current) => (current === item.id ? null : current)), 1400)
  }

  return (
    <section className="related-products">
      <div className="container">
        <div className="related-products__head">
          <div>
            <p className="related-products__kicker">{related.kicker}</p>
            <h2 className="related-products__title">{related.title}</h2>
          </div>
          <a href="#catalog" className="related-products__view-all">
            {related.viewAll}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="related-grid">
          {related.items.map((item) => (
            <article className="related-card" key={item.id}>
              {item.detailSlug ? (
                <Link to={`/product/${item.detailSlug}`} className="related-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <Badge tone="urgency" className="related-card__discount">
                    {item.discountBadge}
                  </Badge>
                  <Badge tone="outline" className="related-card__tag">
                    {item.tag}
                  </Badge>
                </Link>
              ) : (
                <div className="related-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <Badge tone="urgency" className="related-card__discount">
                    {item.discountBadge}
                  </Badge>
                  <Badge tone="outline" className="related-card__tag">
                    {item.tag}
                  </Badge>
                </div>
              )}
              <div className="related-card__body">
                <div className="related-card__rating">
                  <Star aria-hidden="true" fill="currentColor" />
                  <strong>{item.rating.value}</strong>
                  <span>({item.rating.count})</span>
                </div>
                {item.detailSlug ? (
                  <Link to={`/product/${item.detailSlug}`} className="related-card__link">
                    <h3>{item.title}</h3>
                  </Link>
                ) : (
                  <h3>{item.title}</h3>
                )}
                <p>{item.description}</p>
                <div className="related-card__price">
                  <span>₹{item.price}</span>
                  <span className="related-card__mrp">₹{item.mrp}</span>
                  <span className="related-card__save">Save ₹{item.save}</span>
                </div>
                <Button
                  variant={addedId === item.id ? 'tertiary' : 'primary'}
                  size="sm"
                  icon={addedId === item.id ? Check : ShoppingCart}
                  fullWidth
                  onClick={() => handleAdd(item)}
                >
                  {addedId === item.id ? 'Added' : 'Quick Add'}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
