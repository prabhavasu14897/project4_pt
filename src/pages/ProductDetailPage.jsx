import { ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/ProductDetail/Gallery'
import PurchasePanel from '../components/ProductDetail/PurchasePanel'
import SpecsPanel from '../components/ProductDetail/SpecsPanel'
import RelatedProducts from '../components/ProductDetail/RelatedProducts'
import { productDetailsBySlug } from '../data/productDetails'
import './ProductDetailPage.css'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const detail = productDetailsBySlug[slug]

  if (!detail) {
    return (
      <div className="product-detail-page product-detail-page--missing container">
        <h1>Product not found</h1>
        <p>We couldn&rsquo;t find that product. It may have been moved or is no longer listed.</p>
        <Link to="/" className="product-detail-page__back-link">
          ← Back to the catalog
        </Link>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <nav className="breadcrumb container" aria-label="Breadcrumb">
        {detail.breadcrumb.map((crumb, index) => (
          <span key={crumb} className="breadcrumb__item">
            {index === 0 ? (
              <Link to="/">{crumb}</Link>
            ) : index === detail.breadcrumb.length - 1 ? (
              <span className="breadcrumb__current">{crumb}</span>
            ) : (
              <span>{crumb}</span>
            )}
            {index < detail.breadcrumb.length - 1 && (
              <ChevronRight aria-hidden="true" className="breadcrumb__sep" />
            )}
          </span>
        ))}
      </nav>

      <section className="product-detail__main container">
        <Gallery
          gallery={detail.gallery}
          discountBadge={detail.badges.discount}
          certifiedBadge={detail.badges.certified}
          legal={detail.legal}
        />
        <PurchasePanel detail={detail} />
      </section>

      <SpecsPanel detail={detail} />

      <RelatedProducts related={detail.related} />
    </div>
  )
}
