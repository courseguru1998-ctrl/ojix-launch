# Hero Page Overrides

> **PROJECT:** OJIX-Cinematic
> **Generated:** 2026-06-12 13:02:41
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Sections:** 1. Full-screen interactive element, 2. Guided product tour, 3. Key benefits revealed, 4. CTA after completion

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Immersive experience colors. Dark background for focus. Highlight interactive elements.

### Component Overrides

- Avoid: Show loading spinner for 10s+
- Avoid: Only test on your device
- Avoid: Skip heading levels or misuse for styling

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations
- AI Interaction: Stream text response token by token
- Responsive: Test at 320 375 414 768 1024 1440
- Accessibility: Use sequential heading levels h1-h6
- CTA Placement: After interaction complete + Skip option for impatient users
