# Modern Next.js Portfolio (Sanika Style)

A high-performance, responsive portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠️ Customization

### Edit Your Data
All content is managed in a single file:
`src/data/portfolio.ts`

Update your name, role, social links, about text, skills, and experience items there.

### Replace Images
- **Character**: Replace `public/assets/character/character.png`
- **Tech Logos**: Add logos to `public/assets/tech/` and update the paths in `portfolio.ts`
- **Project Thumbnails**: Add images to `public/assets/projects/` and update `portfolio.ts`

### Deploying
#### To Vercel (Recommended)
1. Push your code to GitHub.
2. Connect your repo to [Vercel](https://vercel.com).
3. It will auto-deploy on every push.

#### To GitHub Pages (Static Export)
1. Update `next.config.mjs` to include `output: 'export'`.
2. Run `npm run build`.
3. Push the `out` directory to your `gh-pages` branch.

## ✨ Features
- **Scroll-Driven Animation**: Character shifts from center to left-sticky as you scroll.
- **Sticky Sidebar**: Profile and contact details remain visible on desktop.
- **Dark Mode**: Sleek dark aesthetic with emerald accents.
- **Micro-Interactions**: Hover effects on cards, nav links, and social icons.
- **SEO Optimized**: Standard meta tags and clean semantic HTML.