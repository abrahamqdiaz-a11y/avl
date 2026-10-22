# Avida Luna Wellness

Marketing site for Avida Luna Wellness, a nurse-led mobile IV hydration and wellness concierge in Lakewood Ranch, FL.

Built with Vite, React, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

## Editing content

Business details, services, steps and service-area cities live in `src/data/site.ts`.
Search for `TODO` there to find placeholders (booking link, email, hours, pricing, social URLs).

## Structure

```
src/
  App.tsx              page layout
  index.css            Tailwind theme (colors, fonts)
  data/site.ts         all editable copy and links
  components/
    Navbar.tsx         sticky glass nav + mobile menu
    Hero.tsx
    Services.tsx
    HowItWorks.tsx
    About.tsx
    ServiceArea.tsx    city list + stylized map
    BookingBand.tsx    closing call to action
    Footer.tsx
    Reveal.tsx         scroll fade-in wrapper
    ui.tsx             buttons, headings, logo, social icons
```
