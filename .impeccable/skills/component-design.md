# Component Design Skill

## Purpose

Build a reusable and maintainable component system.

---

## Component Rules

Components should have:

- One clear responsibility
- Predictable props
- Reusable structure
- Theme support
- Responsive behavior
- Accessible interaction

---

## Reuse

Before creating a new component, check whether an existing component can be reused.

Prefer composition over duplication.

---

## Common Components

Create reusable primitives for:

- Button
- Input
- Select
- Search
- Card
- Badge
- Chip
- Table
- Modal
- Drawer
- Tabs
- Quantity Selector

---

## Variants

Use variants for visual differences.

Example:

```text
Button
├── primary
├── secondary
└── tertiary