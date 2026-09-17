# Visual Implementation Skill

## Purpose

Translate the approved design into a high-fidelity frontend implementation.

---

## Primary Rule

Implement the approved design.

Do not redesign while coding.

---

## Theme

Before implementing a component:

1. Identify the active theme.
2. Read the corresponding theme design.
3. Use its tokens.
4. Do not mix theme-specific values.

Light:

`.impeccable/context/light-design.md`

Dark:

`.impeccable/context/dark-design.md`

---

## Visual Fidelity

Pay close attention to:

- Typography
- Font family
- Font weight
- Font size
- Line height
- Letter spacing
- Colors
- Spacing
- Borders
- Radius
- Shadows
- Component dimensions
- Alignment
- Responsive behavior

Small visual inconsistencies should be corrected rather than ignored.

---

## Colors

Never randomly select replacement colors.

Use the active theme's:

- Primary
- Secondary
- Tertiary
- Surface
- Text
- Outline
- Error

tokens.

---

## Typography

Use the exact font families specified by the theme.

Headings and body text must follow the theme hierarchy.

Do not use browser-default typography.

---

## Components

Prefer reusable components.

Bad:

```text
ProductPage
 ├── custom button
 ├── custom card
 └── custom badge

AnotherPage
 ├── another button
 ├── another card
 └── another badge