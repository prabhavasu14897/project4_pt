# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React (component-based SPA). No code exists yet — only approved screen mockups (`/screens`) and image assets (`/images`) as visual/content reference.

## Users

Primary: Indian consumers/families shopping online for festive (Diwali) fireworks and crackers — browsing categories, comparing pre-booking discounts, and getting products delivered safely to their door before the festival.

Secondary (lightweight, not a full designed flow): B2B / bulk wholesale buyers, surfaced today only as a "Bulk & Wholesale (B2B)" nav entry / inquiry link rather than a dedicated purchasing journey.

## Product Purpose

An e-commerce storefront for "Krishna Pyar Crackers," a direct-from-Sivakasi-factory fireworks retailer. Customers discover products by category, pre-book at festive discount pricing, and track fulfillment (factory packing → lorry dispatch → doorstep delivery) through to a confirmed order. Success is a customer who quickly understands the offer, trusts the safety/certification story, and completes checkout (UPI/OTP or COD).

## Positioning

Direct-from-factory sourcing in Sivakasi (India's fireworks manufacturing hub) that cuts out middlemen, paired with "green cracker" credentials (CSIR-NEERI certification, Supreme Court low-emission compliance, no barium salts) and safety-first logistics (shockproof packaging, live WhatsApp order tracking, pincode-based delivery guarantees). The combination of deep pre-booking discounts + verified safety/eco compliance + live logistics transparency is the differentiator, not price alone.

## Operating Context

- Strongly seasonal: activity concentrates around the pre-Diwali festive window ("closes soon" urgency framing).
- Category browsing: one-sound crackers, sparklers, flower pots & fountains, aerial sky shots, festive gift boxes/combos, bulk & wholesale.
- Product discovery: search, category filters, safety filters (e.g. "Low Noise / Kids Safe"), sort by popularity/rating.
- Cart/basket: persistent basket with running total, free-delivery progress threshold, and quantity controls.
- Product detail: pack-size configuration (e.g. single box vs. family combo vs. bulk pack), technical/safety spec sheets, Diwali lighting & safety protocol, related-product cross-sell, pincode delivery checker.
- Checkout: Express UPI/OTP flow and Cash on Delivery (verified OTP), GST shown as included/integrated.
- Post-purchase: order confirmation with a live fulfillment timeline (order placed → factory packing → lorry dispatch → doorstep delivery), WhatsApp-based order tracking/support, printable receipt, and a Diwali safe-celebration advisory.
- Bilingual header toggle visible (English / Tamil) alongside a light/dark theme toggle.
- Two complete, non-mixed visual themes (light and dark) are both in scope — see `.impeccable/context/light-theme.md` and `dark-theme.md`.

## Capabilities and Constraints

- Must faithfully recreate the approved screens in `/screens` rather than reinterpreting them; screens > theme spec > general design rules > project requirements > framework defaults, per `.impeccable/context/screens.md`.
- Must use the provided assets in `/images` (logo, product photography, decorative art) instead of placeholder or unrelated stock imagery.
- Responsive across desktop (1200px+), tablet (768–1199px), and mobile (<768px); mobile must be an intentionally reflowed experience, not a shrunk desktop layout.
- Light and dark themes are separate, complete systems and must not have their tokens mixed.
- B2B/wholesale is explicitly out of scope for a full dedicated flow in this pass — keep it to the existing nav/inquiry entry point.
- Reusable components, semantic HTML, theme tokens (not arbitrary colors), and accessible, predictable interactions are required implementation principles (see `.impeccable/context/project.md`).

## Brand Commitments

"Krishna Pyar Crackers" is a **fictional demo brand** created for this design project. All brand specifics shown in the approved screens — business name, tagline ("Authentic Sivakasi Crackers"), Sivakasi/Tamil Nadu origin story, phone numbers, license/certification numbers (e.g. CSIR-NEERI, Supreme Court green-cracker compliance), founding year, ratings, and customer-count stats — are fixed, approved creative content to preserve exactly as shown. They are not real-world facts to verify, correct, or fact-check, but they should also not be casually altered; treat them the same as any other approved-screen content.

Voice: festive, trustworthy, safety-forward, and value-driven (direct-from-factory, no-middleman framing). Visual identity centers on a purple/gold festive palette and the logo asset at `images/logo.png`.

## Evidence on Hand

- Approved screen mockups in `/screens`: landing page, category (light and dark theme), product detail, express checkout, order confirmation with live tracking. These are the binding visual and content reference for implementation.
- Image assets in `/images`: logo, product photography (sparklers, flower pots, aerial shots, gift hampers), and decorative/background art.
- No real customer data, testimonials, or business records exist beyond what the approved screens already depict. Future work must not invent additional "real" business facts, but may extend the established fictional brand's voice and narrative consistently when new copy is needed.

## Product Principles

1. The approved screens are the source of truth — recreate them faithfully; do not redesign an approved screen while implementing it.
2. Preserve the direct-from-Sivakasi-factory, certified-"green"-cracker positioning in all product-facing content and flows.
3. Safety and trust signaling (certifications, shockproof logistics, safe-handling guidance) carries equal weight to festive delight — never trade one off for the other.
4. Consumer retail is the primary journey; B2B wholesale stays a lightweight secondary entry point rather than a parallel fully-designed flow.
5. Light and dark themes are two complete, independent systems — never blend their tokens.
