# Screen Recreation Skill

## Purpose

Recreate provided UI screenshots with high visual fidelity.

---

## Primary Rule

The screenshot is the visual source of truth.

Do not redesign the screen.

---

## Before Coding

Before implementing a screen:

1. Locate the corresponding reference image.
2. Identify whether it is Light or Dark.
3. Read the corresponding theme design.
4. Break the screen into sections.
5. Identify reusable components.
6. Identify required image assets.

---

## Analyze the Reference

Determine:

### Layout

- Page width
- Content container
- Columns
- Grid
- Section heights
- Header height
- Footer structure

### Spacing

Estimate and then refine:

- Outer margins
- Section gaps
- Card padding
- Element gaps
- Button spacing

Use design-system spacing tokens whenever possible.

### Typography

Match:

- Font family
- Size
- Weight
- Line height
- Letter spacing
- Hierarchy

### Components

Identify:

- Buttons
- Cards
- Badges
- Inputs
- Search
- Navigation
- Product tiles
- Tables
- Modals
- Drawers

---

## Implementation

Build the screen from reusable components.

Do not create one giant page component.

Example:

```text
Page
├── Header
├── Hero
├── CategorySection
│   └── CategoryCard
├── ProductSection
│   └── ProductCard
├── TrustSection
├── PromotionalBanner
└── Footer