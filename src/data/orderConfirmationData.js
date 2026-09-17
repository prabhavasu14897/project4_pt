export const order = {
  id: 'KP-2025-88419',
  customerName: 'Ramesh',
  estimatedDispatch: 'Tomorrow, 11:30 AM',
  logisticsNote: 'Express Lorry Logistics',
  trackingId: 'VRL-SK-SI-88012',
}

export const timeline = [
  {
    step: 1,
    label: 'Order Placed',
    status: 'completed',
    statusLabel: 'Completed',
    meta: 'Today, 2:45 PM',
    note: 'Direct from Sivakasi factory portal',
  },
  {
    step: 2,
    label: 'Factory Packing',
    status: 'active',
    statusLabel: 'In Progress Now',
    meta: 'Sivakasi Godown #4',
    note: '5-Ply heavy duty shockproof sealing',
  },
  {
    step: 3,
    label: 'Lorry Dispatch',
    status: 'upcoming',
    statusLabel: 'Next Step',
    meta: 'Expected Tomorrow',
    note: 'Dedicated PESO-licensed container',
  },
  {
    step: 4,
    label: 'Doorstep Delivery',
    status: 'upcoming',
    statusLabel: 'Estimated',
    meta: 'Oct 28 (Chennai)',
    note: 'OTP-verified contact delivery',
  },
]

export const manifest = [
  {
    id: 'kp-gift-45',
    image: '/images/crackers.png',
    tag: 'Green Certified',
    title: 'Maha Royal Family Hamper (42 Items)',
    meta: 'Qty: 1 Luxury Rigid Gift Box | Batch: SK-2025-A',
    discount: '80% OFF',
    price: 1499,
    mrp: 7495,
    saved: 5996,
  },
  {
    id: 'kp-fp-035',
    image: '/images/special_flower_pots.png',
    tag: 'Low Smoke',
    title: 'Special Flower Pots Asoka (Big)',
    meta: 'Qty: 2 Boxes (10 Pcs/Box) | High-Gloss Silver Fountain',
    discount: '80% OFF',
    price: 190,
    mrp: 950,
    saved: 760,
  },
  {
    id: 'kp-spk-010',
    image: '/images/sparkle_fiesta.png',
    tag: 'Kid Safe',
    title: '10cm Electric Sparklers (Dazzling White)',
    meta: 'Qty: 2 Boxes (10 Sticks/Box) | Zero Toxic Residue',
    discount: '80% OFF',
    price: 72,
    mrp: 360,
    saved: 288,
  },
]

export const manifestTotals = {
  catalogMrp: 11804,
  factoryDiscount: 8682,
  packagingNote: 'Heavy Wooden Shockproof Packaging Box',
  deliveryNote: 'Safe Licensed Express Delivery (Tamil Nadu Logistics)',
  gst: 369.45,
  totalPaid: 2422,
  savedToday: 8682,
}

export const payment = {
  mode: 'UPI - Google Pay (Verified)',
  clearance: 'Instant Gateway Clearance',
}

export const packaging = {
  safePercent: 90,
  title: '5-Ply Industrial Shockproof Reinforcement',
  body: 'Every parcel leaving our Sivakasi facility is enveloped in insulated bubble foam, moisture-barrier wrapping, and industrial strap-binding to withstand cross-state transport without impact.',
  badges: ['PESO Certified', 'Waterproof Shield', 'Fire Retardant Wrap'],
}

export const deliveryAddress = {
  name: 'Ramesh Sundaran',
  lines: ['14/2 Green Glen Apartments, 3rd Cross Street', 'R.A. Puram, Chennai - 600028, Tamil Nadu'],
  contact: '+91 98410 44921',
  note: 'Delivery agent will call 30 minutes prior to delivery arrival.',
}

export const qrVerification = {
  title: 'CSIR-NEERI Green QR Verification',
  body: 'Krishna Pyar Crackers manufactures fireworks compliant with SWAS, SAFAL and STAR approved chemical formulations with 30-35% reduced particulate emissions.',
  howTo: 'Use the government CSIR-NEERI Green QR mobile app to scan the holographic QR sticker affixed to your outer carton to view chemical composition batch tests.',
}

export const safetyAdvisory = [
  {
    title: 'Open Ground Ignition',
    body: 'Light flower pots and ground chakkars only in open fields, away from dry foliage or overhead electrical cables.',
  },
  {
    title: 'Water Bucket Proximity',
    body: 'Always keep two full buckets of water and sand nearby for quenching extinguished sparkler cinders.',
  },
  {
    title: 'Adult Supervision',
    body: 'Never permit children under 12 to ignite aerial fireworks without close guardian attendance.',
  },
]

export const helpline = {
  title: 'Sivakasi Factory Support Desk',
  hours: 'Available 7 Days a week: 8:00 AM – 10:00 PM',
  phone: '+91 9940649206 (Direct Dispatch Manager)',
  email: 'dispatch@krishnapyarcrackers.com',
}

export const crossSell = {
  kicker: 'Pre-Book Before Factory Dispatch Cutoff',
  title: 'Need More Joy For Diwali Night?',
  note: `Append to your existing order #${order.id} before 8:00 PM without paying separate courier charges.`,
  viewAll: 'View Complete 120+ Product Catalog',
  items: [
    {
      id: 'wala-garland',
      image: '/images/crackers.png',
      discountBadge: '80% OFF',
      tag: 'Low Decibel',
      title: '1000 Wala Traditional Red Garland',
      description: 'Continuous rhythm festival sound with minimal smoke residue. Sivakasi standard roll.',
      price: 280,
      mrp: 1400,
      save: 1120,
    },
    {
      id: 'sky-rider',
      image: '/images/12_shots_multi_color.png',
      discountBadge: '80% OFF',
      tag: '5 Shots Sequence',
      title: '12-Shots Multi-Color Sky Rider',
      description: 'Magnificent aerial umbrellas bursting in gold, green, violet and diamond glitter.',
      price: 340,
      mrp: 1700,
      save: 1360,
    },
    {
      id: 'ground-chakkar-big',
      image: '/images/ground_chakkar.png',
      discountBadge: '80% OFF',
      tag: 'Long Spin',
      title: 'Deluxe Ground Chakkar (Special Big)',
      description: '10 Pcs/Box. High-duration 45-second high speed golden whirling wheel.',
      price: 160,
      mrp: 800,
      save: 640,
    },
  ],
}
