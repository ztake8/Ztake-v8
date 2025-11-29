# Ztake Payments - Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Vercel account
- Environment variables configured

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy

## Environment Variables
No environment variables required for basic deployment.

Optional variables:
- `NEXT_PUBLIC_API_URL` - API endpoint (if using custom backend)
- Analytics keys (if configured)

##Performance Optimizations Applied
- ✅ Image optimization with WebP/AVIF
- ✅ Static generation for all routes
- ✅ Lazy loading for components
- ✅ Optimized CSS with Tailwind
- ✅ Minimal JavaScript bundle
- ✅ Mobile-first responsive design

## Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check chatbot functionality
- [ ] Test contact form
- [ ] Verify dark mode toggle
- [ ] Test all navigation links
- [ ] Check performance with Lighthouse

## Lighthouse Score Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Support
For deployment issues, contact: support@ztake.in
