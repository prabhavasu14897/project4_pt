import { ShieldCheck, Star } from 'lucide-react'
import { guarantees, testimonial } from '../../data/checkoutData'
import './GuaranteeCard.css'

export default function GuaranteeCard() {
  return (
    <section className="guarantee-card">
      <h2>
        <ShieldCheck aria-hidden="true" />
        Krishna Pyar Sivakasi Guarantee
      </h2>

      <ul className="guarantee-list">
        {guarantees.map((g) => (
          <li key={g.title}>
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>{g.title}</strong>
              <p>{g.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="guarantee-testimonial">
        <div className="guarantee-testimonial__rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden="true" fill="currentColor" />
          ))}
          <span>
            {testimonial.rating}/5 from {testimonial.reviewerCount}
          </span>
        </div>
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
        <cite>— {testimonial.author}</cite>
      </div>
    </section>
  )
}
