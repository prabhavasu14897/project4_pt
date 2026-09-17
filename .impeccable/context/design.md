# Common Design Rules

This file defines rules shared by both themes.

Theme-specific visual values are defined in:

- `light-design.md`
- `dark-design.md`

Always use the active theme's tokens.

---

## Theme Support

The application supports:

- Light Theme
- Dark Theme

Theme switching must affect visual presentation without changing:

- Content
- Information architecture
- User flow
- Functionality
- Data
- Component behavior

---

## Design Tokens

Use semantic design tokens wherever possible.

Examples:

- primary
- secondary
- tertiary
- surface
- surface-container
- on-surface
- on-surface-variant
- outline
- outline-variant
- error

Avoid hardcoded visual values inside components.

---

## Typography

Use only the typography system defined by the active theme.

Maintain a clear hierarchy between:

- Display
- Headlines
- Titles
- Body text
- Labels
- Captions

Do not introduce additional fonts without explicit approval.

---

## Layout

Use the responsive grid defined by the active theme.

Maintain:

- Consistent gutters
- Consistent margins
- Consistent section spacing
- Predictable content widths
- Clear visual hierarchy

---

## Spacing

Use theme spacing tokens.

Prefer:

- space-xs
- space-sm
- space-md
- space-lg
- space-xl

over arbitrary spacing values.

---

## Components

Create reusable components for repeated UI patterns.

Examples:

- Header
- Navigation
- Button
- Input
- Search
- Select
- Card
- Product Card
- Badge
- Chip
- Table
- Modal
- Drawer
- Quantity Selector
- Form Field

Components should support both themes.

---

## States

Interactive components must define:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error

Do not rely only on color to communicate state.

---

## Accessibility

Maintain sufficient contrast.

All interactive controls must:

- Be keyboard accessible
- Have visible focus states
- Have meaningful labels
- Have appropriate touch targets
- Use semantic HTML where possible

---

## Visual Fidelity

When implementing an approved design:

1. Follow the design exactly.
2. Follow the active theme.
3. Preserve spacing.
4. Preserve typography.
5. Preserve component proportions.
6. Preserve responsive behavior.
7. Do not redesign during implementation.

---

## Priority

When rules conflict:

1. Product requirements
2. Approved screen design
3. Active theme
4. Common design rules
5. Framework defaults