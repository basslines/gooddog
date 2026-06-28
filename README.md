# Good Dog Training — Next.js Website

Single-page marketing website for Good Dog Training, Dubai UAE.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** — Playfair Display + Inter

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel (Recommended)

### Option 1 — GitHub + Vercel (best for ongoing updates)

1. Create a new repo on GitHub
2. Push code:
```bash
git init
git add .
git commit -m "Initial commit — Good Dog Training website"
git remote add origin https://github.com/YOUR_USERNAME/good-dog-training.git
git push -u origin main
```
3. Go to vercel.com, click "New Project", import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Add your custom domain under Settings > Domains

### Option 2 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Updating Content

| What to change | File |
|---|---|
| Phone / WhatsApp number | Search `+971585806744` in all components |
| Hero headline & stats | `src/components/Hero.tsx` |
| Services | `src/components/Services.tsx` |
| Pricing image | Replace `public/pricing.png` |
| Testimonials | `src/components/Reviews.tsx` |
| About text | `src/components/About.tsx` |
| Logo | Replace `public/logo.png` |
| Colors | `tailwind.config.ts` |

## Brand Colors
- green-dark: #1a3a2a
- green-mid: #2d5a3d  
- green-accent: #3a7a50
- cream: #faf8f3
