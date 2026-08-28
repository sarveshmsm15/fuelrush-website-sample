# FUELRUSH — Marketing Website

A premium Next.js 14 marketing website for FUELRUSH, India&apos;s on-demand fuel delivery service.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3.4 + Custom CSS variables
- **Animations:** Framer Motion
- **Fonts:** Geist Sans + Geist Mono
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
fuelrush-website/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Landing page
│   ├── api/                # API routes
│   ├── blog/               # Blog system
│   ├── about/              # About page
│   ├── careers/            # Careers page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   ├── animations/         # Animation components
│   ├── navigation/         # Navbar, mobile menu
│   └── effects/            # Visual effects
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & constants
└── types/                  # TypeScript types
```

## Features

- 🎨 **Liquid Glass UI** — Real backdrop-filter glassmorphism
- 🌓 **Theme System** — ONYX / PEARL / System with localStorage persistence
- ✨ **Scroll Animations** — Framer Motion scroll reveals
- 📱 **Fully Responsive** — Optimized from 375px to 4K
- 🔒 **API Routes** — Contact, newsletter, download tracking
- ⚡ **Performance** — Optimized images, font loading, minimal JS

## Deployment

Optimized for Vercel deployment:

```bash
vercel --prod
```

## License

© 2024 FUELRUSH Technologies Pvt. Ltd. All rights reserved.
