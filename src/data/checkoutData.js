export const checkoutSteps = [
  { id: 1, label: 'Cart' },
  { id: 2, label: 'Address & Pay' },
  { id: 3, label: 'Dispatch Track' },
]

export const buyer = {
  mobile: '+91 98765 43210',
  email: 'ramesh.s@example.com',
  note: 'WhatsApp shipment dispatch updates will be sent instantly',
}

export const deliveryAddress = {
  name: 'Ramesh Sundaran',
  pincode: '600028',
  city: 'R.A. Puram, Chennai, Tamil Nadu',
  routeNote: 'Direct Sivakasi 48-Hour Hub Road Line · Insured Transit',
  flat: 'Flat 4B, Sri Krishna Apartments',
  street: '2nd Main Road, Trustpakkan Canal Street',
  landmark: 'Opposite Sangeetha Fast Foods',
  driverNote: 'Keep in dry safe place / Fragile handle with care',
}

export const paymentMethods = [
  {
    id: 'upi',
    title: 'Instant UPI (GPay / PhonePe / Paytm / BHIM)',
    badge: 'Flat Extra 5% Off',
    note: 'Recommended: Zero transaction fee, fastest booking dispatch confirmation.',
    logos: ['GPay', 'PhonePe', 'Paytm'],
    default: true,
  },
  {
    id: 'card',
    title: 'Credit / Debit Card',
    note: 'Visa, MasterCard, RuPay, Maestro & Diners Club accepted.',
    logos: ['Visa', 'RuPay'],
  },
  {
    id: 'netbanking',
    title: 'Net Banking',
    note: 'All 50+ major Indian Nationalized & Private Scheduled Banks.',
    logos: ['HDFC', 'SBI', 'ICICI'],
  },
  {
    id: 'cod',
    title: 'Cash on Delivery (COD)',
    badge: 'Conditional',
    badgeTone: 'neutral',
    note: 'Requires WhatsApp OTP confirmation prior to Sivakasi factory loading. ₹50 refundable advance delivery booking deposit.',
  },
]

export const guarantees = [
  {
    title: '100% CSIR-NEERI Certified Green Formulations',
    body: 'Free from hazardous barium salts with 30-35% reduced particulate emissions.',
  },
  {
    title: 'Heavy 5-Ply Corrugated Transit Packaging',
    body: 'Shockproof and moisture-sealed containers for 100% damage-free road transport.',
  },
  {
    title: 'Direct Hotline & WhatsApp Support',
    body: 'Instant dispatch tracking updates to +91 9940649206 from Sivakasi control room.',
  },
]

export const testimonial = {
  rating: 4.9,
  reviewerCount: '18,400+ Families',
  quote:
    'The VIP Family Hamper arrived in pristine packaging directly from Sivakasi in just 2 days. The electric sparklers were crisp and zero smoke!',
  author: 'Karthik Ramanathan, Chennai',
}
