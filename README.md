# Aura Life Science Website

A polished, multi-page website for Aura Life Science, showcasing our cyanobacteria biomanufacturing platform.

## Features

- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Fully responsive and mobile-optimized
- Animated blob backgrounds using the Aura color palette
- Static site generation for GitHub Pages deployment
- Automated deployment via GitHub Actions

## Pages

- **Home** - Landing page with hero section, key metrics, and value proposition
- **Technology** - Deep dive into the cyanobacteria platform and its advantages
- **Team** - Leadership team, advisors, and company values
- **Impact** - Environmental metrics and sustainability benefits
- **Contact** - Partnership, investment, and general inquiry forms

## Color Palette

Inspired by cyanobacteria absorption spectra:
- Mint: `#8ef9d5`
- Mint Light: `#d4fdee`
- Orchid: `#e2addb`
- Azure: `#5fc2f0`
- Blush: `#f5c7be`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Access at `https://<username>.github.io/Aura_website/`

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. The workflow will handle the rest

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── public/
│   └── .nojekyll           # Prevents Jekyll processing
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── technology/     # Technology page
│   │   ├── team/           # Team page
│   │   ├── impact/         # Impact page
│   │   └── contact/        # Contact page
│   └── components/
│       ├── AnimatedBackground.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## License

 2024 Aura Life Science. All rights reserved.
