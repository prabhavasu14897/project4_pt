import { useState } from 'react'
import { PlayCircle, QrCode, ShieldCheck } from 'lucide-react'
import Badge from '../common/Badge'
import './Gallery.css'

export default function Gallery({ gallery, discountBadge, certifiedBadge, legal }) {
  const [activeId, setActiveId] = useState(gallery.thumbnails[0].id)
  const active = gallery.thumbnails.find((t) => t.id === activeId) ?? gallery.thumbnails[0]

  return (
    <div className="gallery">
      <div className="gallery__main">
        <Badge tone="urgency" className="gallery__badge gallery__badge--left">
          {discountBadge}
        </Badge>
        <Badge tone="tertiary" className="gallery__badge gallery__badge--right">
          {certifiedBadge}
        </Badge>
        <img src={active.image} alt={gallery.thumbnails.find((t) => t.id === activeId)?.label ?? 'Product'} />
      </div>

      <div className="gallery__meta">
        <span>{gallery.caption}</span>
        <span>{gallery.note}</span>
      </div>

      <div className="gallery__thumbs">
        {gallery.thumbnails.map((thumb) => (
          <button
            key={thumb.id}
            type="button"
            className={`gallery__thumb ${activeId === thumb.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(thumb.id)}
          >
            <img src={thumb.image} alt={thumb.label} />
            {thumb.isVideo && <PlayCircle className="gallery__thumb-icon" aria-hidden="true" />}
            {thumb.isQr && <QrCode className="gallery__thumb-icon" aria-hidden="true" />}
            <span>{thumb.label}</span>
          </button>
        ))}
      </div>

      <div className="gallery__legal">
        <ShieldCheck aria-hidden="true" />
        <div>
          <strong>{legal.title}</strong>
          <p>{legal.body}</p>
        </div>
      </div>
    </div>
  )
}
