# SIRONIC Rendszerház - Deployment Guide

## Quick Deployment Checklist

### Pre-Deployment

- [ ] Review all Hungarian content for accuracy
- [ ] Test contact form locally
- [ ] Verify all navigation links work
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Test dark mode toggle
- [ ] Verify accessibility (keyboard navigation, screen readers)
- [ ] Run `npm run build` successfully
- [ ] Set up domain DNS (A/CNAME records)

### Vercel Deployment

1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your repository

2. **Configure Project**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables** (Settings > Environment Variables)

   Required:
   ```
   NEXT_PUBLIC_SITE_URL=https://sironic.hu
   ```

   Optional (for email functionality):
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx
   CONTACT_RECIPIENT_EMAIL=hello@sironic.hu
   ```

   Optional (for analytics):
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=1234567890
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Visit your deployment URL

5. **Custom Domain**
   - Settings > Domains
   - Add `sironic.hu` and `www.sironic.hu`
   - Configure DNS records as shown by Vercel
   - SSL certificate auto-generated

### Post-Deployment

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check meta tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Submit sitemap to Google Search Console: `https://sironic.hu/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test performance with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test accessibility with [WAVE](https://wave.webaim.org/)
- [ ] Set up monitoring (Vercel Analytics, Google Analytics)

## Alternative Deployment Options

### Netlify

```bash
# Build settings
Build command: npm run build
Publish directory: .next
```

Environment variables: Same as Vercel

### Self-Hosted (Node.js)

```bash
# Install dependencies
npm install

# Build
npm run build

# Start production server
npm start
```

Runs on port 3000 by default. Use a reverse proxy (nginx/Apache) for production.

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t sironic-website .
docker run -p 3000:3000 sironic-website
```

## DNS Configuration

### For Vercel:

**A Record (apex domain):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME (www subdomain):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

## Performance Optimization

- Images: Add actual images to `/public/images/` and use Next.js `<Image>` component
- Fonts: Inter font already optimized via next/font
- Analytics: Only enable when needed to reduce JS bundle
- Monitoring: Use Vercel Analytics or Google Analytics

## SEO Optimization

1. **Google Search Console**
   - Verify ownership
   - Submit sitemap: `https://sironic.hu/sitemap.xml`
   - Monitor indexing status

2. **Google My Business**
   - Create business listing
   - Add correct address, phone, hours
   - Link website

3. **Social Media**
   - Update Facebook Open Graph tags
   - Set up Twitter Cards
   - Add social media links to footer

## Email Setup (SendGrid)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify sender email (hello@sironic.hu)
3. Create API key with "Mail Send" permissions
4. Add to environment variables: `SENDGRID_API_KEY`
5. Uncomment SendGrid code in `/app/api/contact/route.ts`
6. Test form submission

## Analytics Setup

### Google Analytics (GA4)

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables: `NEXT_PUBLIC_GA_ID`
4. Implement tracking script in `app/layout.tsx`

### Meta Pixel

1. Create pixel at [business.facebook.com](https://business.facebook.com)
2. Get Pixel ID
3. Add to environment variables: `NEXT_PUBLIC_META_PIXEL_ID`
4. Implement pixel script in `app/layout.tsx`

## Monitoring & Maintenance

- **Uptime Monitoring:** Use UptimeRobot or Pingdom
- **Error Tracking:** Consider Sentry integration
- **Performance:** Monitor with Vercel Analytics
- **Security:** Keep dependencies updated (`npm audit`)

## Support

Issues or questions?
- Email: hello@sironic.hu
- Phone: +36 70 273 5532

---

**Last Updated:** 2024
**Version:** 1.0.0
