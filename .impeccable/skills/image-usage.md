
### And `image-usage.md`

```md
# Image Usage Skill

## Purpose

Use the approved shared image assets consistently across Light and Dark screens.

---

## Asset Location

All shared images are located in:

`images/`

Do not assume theme-specific image directories.

---

## Asset Selection

Before adding an image:

1. Inspect the reference screen.
2. Identify the required image.
3. Search `images/`.
4. Reuse the matching approved asset.

---

## Do Not

Do not:

- Use placeholder images when an approved asset exists.
- Download random stock images.
- Generate replacement images unnecessarily.
- Change the image composition without a requirement.
- Duplicate the same asset into Light/Dark folders.

---

## Image Rendering

Match the reference screen's:

- Aspect ratio
- Width
- Height
- Crop
- Position
- Object-fit
- Border radius
- Background
- Overlay

---

## Theme Independence

Images are shared between Light and Dark themes by default.

Theme changes should primarily affect the UI styling unless the screenshot explicitly uses a different image.

---

## Performance

Use optimized image rendering.

Prefer responsive image sizing.

Lazy-load images that are below the fold where appropriate.

Avoid loading unnecessarily large assets.