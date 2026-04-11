# Design System: The Serene Flow

## 1. Overview & Creative North Star
**Creative North Star: "The Tactile Sanctuary"**

This design system rejects the clinical, data-heavy aesthetic of traditional tracking apps in favor of a "Tactile Sanctuary." Our goal is to transform the chore of data entry into a moment of calm. We move beyond the "standard app" look by embracing **High-End Editorial** layouts—characterized by generous negative space, intentional asymmetry, and a focus on tonal depth rather than structural rigidity.

The interface should feel less like a software tool and more like a series of soft, layered physical materials. We prioritize the user’s emotional state, using fluid transitions and a "weightless" hierarchy to ensure that even the most frequent sessions feel effortless.

---

## 2. Colors: Tonal Atmosphere
We use a sophisticated palette of morning-sky blues, botanical greens, and warm creams. The goal is a low-stress, high-clarity environment.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. 
- *Instead of a border:* Place a `surface-container-low` card on a `surface` background.
- *Instead of a divider:* Use a vertical gap from your spacing scale or a subtle transition from `surface-container` to `surface-container-highest`.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested, physical layers. 
- **Base Layer:** `surface` (#f8faf8) or `background` (#f8faf8).
- **Secondary Sections:** `surface-container-low` (#f1f4f2) for broad content areas.
- **Interactive Elements:** `surface-container-lowest` (#ffffff) to make actionable cards feel "lifted" and pure.
- **Emphasis Areas:** Use `primary-container` (#abd3fd) for active states or highlighted sessions to provide a soft glow of color.

### The "Glass & Gradient" Rule
To add soul to the interface, use Glassmorphism for floating navigation bars or overlays. Use `surface_variant` with a 70% opacity and a 20px backdrop-blur. 
- **Signature Gradients:** For Hero sessions or "Start" actions, use a linear gradient from `primary` (#3b6287) to `primary_dim` (#2e567a) at a 135-degree angle. This provides a professional polish that flat color cannot replicate.

---

## 3. Typography: Editorial Clarity
We pair the modern, geometric stability of **Plus Jakarta Sans** for displays with the approachable, highly legible **Manrope** for functional text.

- **The Headline Strategy:** Use `display-sm` or `headline-lg` for session summaries. These should be set with tight letter-spacing (-0.02em) to feel like a high-end magazine.
- **The Body Strategy:** `body-lg` (Manrope) is your workhorse. Ensure line heights are generous (1.6x) to maintain the "calming" promise.
- **The Label Strategy:** Use `label-md` in all-caps with increased letter-spacing (+0.05em) for secondary metadata like timestamps, creating a sophisticated contrast against the fluid headlines.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are too "digital" for this system. We use **Tonal Layering** to convey importance.

- **The Layering Principle:** Stack `surface-container-lowest` cards atop `surface-container-low` backgrounds. The contrast between the pure white and the off-white creates a soft, natural lift.
- **Ambient Shadows:** For floating elements (like a "Stop Timer" FAB), use an extra-diffused shadow: `offset: 0, 12px; blur: 24px; color: rgba(45, 52, 50, 0.06)`. The shadow color is derived from `on-surface`, making it feel like natural ambient light.
- **The "Ghost Border" Fallback:** If a container lacks contrast (e.g., on certain displays), use a "Ghost Border": `outline-variant` (#acb4b1) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons & Inputs
- **Primary Action:** Large `xl` (3rem) rounded corners. Background: `primary` (#3b6287). Text: `on-primary` (#f7f9ff).
- **Secondary Action:** Use `secondary-container` (#d5e4f7) with `on-secondary-container` (#455363) text. No border.
- **Input Fields:** Use `surface-container-highest` (#dde4e1) as the fill color. On focus, transition the background to `primary-container` (#abd3fd) with a subtle "Ghost Border."

### Cards & Session Lists
- **The "No-Divider" Rule:** List items must never be separated by lines. Use a 12px or 16px gap. If items need distinct separation, give each its own `surface-container-low` background with `md` (1.5rem) rounded corners.
- **Asymmetric Layouts:** In cards, don't center everything. Align the primary metric (e.g., "150ml") to the top left in `headline-md`, and secondary data (e.g., "Left Side") to the bottom right in `label-md`.

### Specialized Components
- **The Flow Timer:** A large, circular element using a `primary-container` stroke that fills as the session progresses. The center should use `surface-bright` to appear "hollow" and light.
- **Soft Chips:** For tagging sessions (e.g., "Manual," "Electric"), use `tertiary-container` (#d2ccfd) with `tertiary` (#5e5a84) text. Use `full` (9999px) rounding.

---

## 6. Do's and Don'ts

### Do
- **Do** use `xl` rounding (3rem) for large containers to emphasize the "soft" brand personality.
- **Do** allow content to "breathe" with margins of at least 24px on the sides of the screen.
- **Do** use `on-surface-variant` for secondary text to maintain a low-contrast, calming hierarchy.

### Don't
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#2d3432) to keep the look high-end and soft.
- **Don't** use standard Material Design "Drop Shadows." They are too harsh for a stress-free environment.
- **Don't** use 90-degree corners. Even the smallest element should have at least `sm` (0.5rem) rounding.
- **Don't** cram data. If a screen feels busy, move secondary information into a "Details" sheet using a `surface-container-high` backdrop.