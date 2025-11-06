# Deployment Guide

This guide covers multiple deployment options for your AI Generalist Portfolio.

## Quick Deploy Buttons

### GitHub Pages (Free)
[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://github.com/new)

### Netlify (Free tier)
[![Deploy to Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://app.netlify.com/start)

### Vercel (Free tier)
[![Deploy to Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/new)

---

## Detailed Deployment Instructions

### Option 1: GitHub Pages (Recommended for beginners)

**Prerequisites:**
- GitHub account
- Git installed on your computer

**Steps:**

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"

3. **Wait and Access:**
   - Wait 2-5 minutes for deployment
   - Your site will be available at: `https://yourusername.github.io/your-portfolio`
   - For a custom domain: Add a `CNAME` file with your domain name

**Pros:**
- Free
- Automatic deployment on every push
- Easy to set up
- Good integration with GitHub

**Cons:**
- Public repositories only (for free)
- Limited to static sites
- Build time limits

---

### Option 2: Netlify (Great for continuous deployment)

**Prerequisites:**
- GitHub account (or GitLab/Bitbucket)

**Steps:**

1. **Push to Git:**
   ```bash
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Choose your Git provider (GitHub)
   - Authorize Netlify to access your repositories
   - Select your portfolio repository
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - Go to Site settings > Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

**Pros:**
- Free tier with 100GB bandwidth
- Automatic HTTPS
- Form handling (Netlify Forms)
- Preview deployments for pull requests
- Easy custom domains

**Cons:**
- Build time limits on free tier
- Bandwidth limits

---

### Option 3: Vercel (Excellent performance)

**Prerequisites:**
- GitHub/GitLab/Bitbucket account

**Steps:**

1. **Push to Git:**
   ```bash
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import from Git repository
   - Select your portfolio repository
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to project settings
   - Add domain
   - Configure DNS records

**Pros:**
- Excellent performance (edge network)
- Automatic HTTPS
- Free tier with generous limits
- Analytics included
- Easy custom domains

**Cons:**
- Build time limits
- Learning curve for advanced features

---

### Option 4: Surge.sh (Simplest deployment)

**Prerequisites:**
- Node.js installed

**Steps:**

1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   cd your-portfolio-folder
   surge
   ```

3. **Follow Prompts:**
   - Enter email
   - Create password
   - Choose domain (or use suggested one)

**Pros:**
- Extremely simple
- Free
- No Git required

**Cons:**
- Must be done manually each time
- Less features
- No automatic deployments

---

## Setting Up Custom Domain

### For GitHub Pages:

1. **Add CNAME file:**
   - Create a file named `CNAME` (no extension)
   - Add your domain: `portfolio.example.com`

2. **Configure DNS:**
   - Add CNAME record: `portfolio` points to `yourusername.github.io`
   - For apex domains (example.com), use A records pointing to GitHub's IPs

### For Netlify/Vercel:

1. **Add Domain in Dashboard:**
   - Go to project settings
   - Add custom domain
   - Follow DNS configuration instructions

2. **Common DNS Records:**
   - CNAME: `www` points to your-site-name.netlify.app
   - A record: `@` points to Netlify's IP addresses

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Contact form works (test with a real submission)
- [ ] All links work (test external links)
- [ ] Mobile responsiveness (test on phone/tablet)
- [ ] All images load correctly
- [ ] Social media meta tags work (test with Facebook Sharing Debugger)
- [ ] Google Search Console shows the site (submit sitemap)
- [ ] Update sitemap.xml with your actual domain
- [ ] Update robots.txt with your actual domain

---

## Continuous Deployment

All Git-based deployments (GitHub Pages, Netlify, Vercel) automatically redeploy when you push changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

The site will update within 1-2 minutes.

---

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before uploading
   - Use SVGs for icons (already done in this template)

2. **Enable Compression:**
   - Netlify: Enable automatically
   - Vercel: Enabled by default
   - GitHub Pages: Use Cloudflare for compression

3. **Use a CDN:**
   - All recommended hosts include CDN
   - GitHub Pages: Can use Cloudflare

4. **Minify Assets (Optional):**
   - For production, consider minifying CSS/JS
   - Tools: Vite, Webpack, or online minifiers

---

## Troubleshooting

### Site not loading:
- Check that all files are pushed to repository
- Verify domain DNS settings
- Clear browser cache

### Images not showing:
- Check image paths are correct
- Ensure images are committed to repository
- Verify image URLs are correct in data.js

### Contact form not working:
- Verify form action URL is correct
- Check spam/junk folder for test submissions
- Ensure form backend is configured (Formspree, Netlify Forms, etc.)

### Custom domain not working:
- Wait 24-48 hours for DNS propagation
- Double-check DNS records
- Contact hosting support

---

## Security Headers (Already Configured)

The template includes a Content Security Policy (CSP) in index.html. For additional security, consider adding:

- HTTPS redirect (automatic on Netlify/Vercel)
- Security.txt file
- Additional CSP directives for production

---

## Analytics (Optional)

Add Google Analytics by including the tracking code in index.html before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual tracking ID.

---

## Support

For deployment issues:
- GitHub Pages: https://docs.github.com/en/pages
- Netlify: https://docs.netlify.com/
- Vercel: https://vercel.com/docs
- Surge: https://surge.sh/help/

Good luck with your deployment! 🚀
