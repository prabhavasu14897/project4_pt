import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Check } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import QuantityStepper from '../common/QuantityStepper'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(product.quantity)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const MediaWrap = product.detailSlug ? Link : 'div'
  const mediaProps = product.detailSlug ? { to: `/product/${product.detailSlug}` } : {}

  const handleAdd = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article className="product-card">
      <MediaWrap {...mediaProps} className="product-card__media">
        <img src={product.image} alt={product.title} loading="lazy" />
        <Badge tone="urgency" className="product-card__discount">
          {product.discountBadge}
        </Badge>
        <Badge tone="outline" className="product-card__feature">
          {product.featureBadge}
        </Badge>
        {product.countBadge && (
          <span className="product-card__count">{product.countBadge}</span>
        )}
      </MediaWrap>

      <div className="product-card__body">
        <div className="product-card__tag-row">
          <Badge tone="tertiary">{product.tag}</Badge>
          <span className="product-card__sku">SKU: {product.sku}</span>
        </div>

        {product.detailSlug ? (
          <Link to={`/product/${product.detailSlug}`} className="product-card__title">
            {product.title}
          </Link>
        ) : (
          <h3 className="product-card__title">{product.title}</h3>
        )}
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__price-row">
          <span className="product-card__price">₹{product.price}</span>
          <span className="product-card__mrp">₹{product.mrp}</span>
          <span className="product-card__save">Save ₹{product.save}</span>
        </div>

        <div className="product-card__actions">
          <QuantityStepper
            value={quantity}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            onIncrease={() => setQuantity((q) => q + 1)}
            label={`${product.title} quantity`}
          />
          <Button
            variant={added ? 'tertiary' : 'secondary'}
            size="sm"
            icon={added ? Check : ShoppingCart}
            fullWidth
            onClick={handleAdd}
          >
            {added ? 'Added' : 'Add to Basket'}
          </Button>
        </div>
      </div>
    </article>
  )
}
