# Screen Reference Context

## Purpose

The provided screen images are the primary visual reference for implementation.

The goal is to recreate the approved screens as closely as possible using real frontend components.

---

## Source of Truth

For visual implementation, follow this priority:

1. Approved screen image
2. Active theme design system
3. Common design rules
4. Project requirements
5. Framework defaults

Do not redesign an approved screen.

---

## Screen Images

Screens are stored under:

`/screens/`

---

## Screen Recreation

When implementing a screen, inspect the corresponding reference image before writing the UI.

Analyze:

- Overall page structure
- Header
- Navigation
- Hero section
- Content sections
- Cards
- Product grids
- Images
- Buttons
- Forms
- Tables
- Badges
- Footer
- Spacing
- Alignment
- Typography
- Borders
- Radius
- Shadows
- Responsive behavior

---

## Exact Visual Matching

Do not approximate important visual details when they are visible in the reference.

Match:

- Element position
- Relative dimensions
- Content hierarchy
- Spacing
- Image proportions
- Typography hierarchy
- Component shapes
- Visual density
- Color treatment
- Background treatment

---

## Theme

Each screen belongs to a theme.

Light screens must use:

`light-design.md`

Dark screens must use:

`dark-design.md`

Do not mix theme tokens.

---

## Missing Information

If something is not visible in the screen reference, use the applicable design system and project requirements.

Do not invent major sections or interactions without a requirement.

---

## Responsive Behavior

If mobile/tablet references are provided, reproduce them directly.

If only desktop is provided:

- Infer responsive behavior from the design system.
- Preserve the desktop visual hierarchy.
- Reflow content logically.
- Do not create an unrelated mobile design.

---

## Screen-by-Screen Development

Build one screen at a time.

For every screen:

1. Inspect reference.
2. Identify reusable components.
3. Implement structure.
4. Apply theme.
5. Add real images/assets.
6. Implement responsive behavior.
7. Compare against reference.
8. Fix visual differences.
9. Run quality checks.
10. Move to the next screen.