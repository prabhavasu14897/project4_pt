import { useState } from 'react'
import { ArrowRight, ShoppingCart, Timer, Check } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import { useCart } from '../../context/CartContext'
import { crossSell } from '../../data/orderConfirmationData'
import './ConfirmationCrossSell.css'

export default function ConfirmationCrossSell() {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState(null)

  const handleAdd = (item) => {
    addItem(item, 1)
    setAddedId(item.id)
    setTimeout(() => setAddedId((current) => (current === item.id ? null : current)), 1400)
  }

  return (
    <section className="confirmation-crosssell">
      <div className="container">
        <div className="confirmation-crosssell__head">
          <div>
            <p className="confirmation-crosssell__kicker">
              <Timer aria-hidden="true" />
              {crossSell.kicker}
            </p>
            <h2>{crossSell.title}</h2>
            <p className="confirmation-crosssell__note">{crossSell.note}</p>
          </div>
          <a href="#catalog" className="confirmation-crosssell__view-all">
            {crossSell.viewAll}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="crosssell-grid">
          {crossSell.items.map((item) => (
            <article className="crosssell-card" key={item.id}>
              <div className="crosssell-card__media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <Badge tone="urgency" className="crosssell-card__discount">
                  {item.discountBadge}
                </Badge>
                <Badge tone="outline" className="crosssell-card__tag">
                  {item.tag}
                </Badge>
              </div>
              <div className="crosssell-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="crosssell-card__price">
                  <span>₹{item.price}</span>
                  <span className="crosssell-card__mrp">₹{item.mrp}</span>
                  <span className="crosssell-card__save">Save ₹{item.save}</span>
                </div>
                <Button
                  variant={addedId === item.id ? 'tertiary' : 'primary'}
                  size="sm"
                  icon={addedId === item.id ? Check : ShoppingCart}
                  fullWidth
                  onClick={() => handleAdd(item)}
                >
                  {addedId === item.id ? 'Added' : 'Add'}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
