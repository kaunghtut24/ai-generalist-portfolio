AI Generalist Portfolio — Starter Kit
=====================================

What you get
- index.html — modern, accessible HTML structure with SEO optimization
- style.css — mobile-first responsive stylesheet with CSS custom properties
- data.js — simple data object to populate projects & certifications
- script.js — vanilla JavaScript renderer with image error handling
- favicon.svg & app-icon.svg — vector-based icons
- robots.txt & sitemap.xml — SEO and search engine guidance
- .gitignore — Git version control configuration
- README.md — this file

How to use
1. Customize your content:
   - Replace all instances of "[Your Name]" in index.html
   - Update data.js with your real projects and certification links
   - Replace placeholder links (GitHub, LinkedIn, email, certificate URLs)
   - Update sitemap.xml with your actual domain

2. Set up the contact form (choose one option):

   Option A: Formspree (Recommended - Free tier available)
   1. Go to https://formspree.io
   2. Create a new form
   3. Copy your Form ID
   4. Replace 'yourFormId' in index.html (line ~90) with your actual Form ID
   5. Test the form to ensure it works

   Option B: Netlify Forms (If hosting on Netlify)
   1. Add name="contact" to the form element
   2. Add data-netlify="true" attribute to the form
   3. Remove the action attribute
   4. Add hidden input: <input type="hidden" name="form-name" value="contact">

   Option C: FormSubmit (No account needed)
   1. Replace action URL with: https://formsubmit.co/YOUR_EMAIL
   2. Add a hidden input: <input type="hidden" name="_captcha" value="false">

3. Deploy your site:
   - GitHub Pages: Push to GitHub and enable Pages in settings
   - Netlify: Drag & drop the folder or connect your GitHub repo
   - Vercel: Import from GitHub
   - Any static hosting provider

Accessibility & SEO
- Semantic HTML5 with ARIA labels
- Skip link for keyboard navigation
- Focus management and visible focus indicators
- Open Graph and Twitter Card meta tags
- Responsive design (mobile-first approach)
- Content Security Policy configured
- robots.txt and sitemap.xml included

Technical Features
- Image error handling for better UX
- Content Security Policy for security
- Mobile navigation with proper ARIA attributes
- CSS custom properties for easy theming
- Modern browser support (ES6+)

Customization
- Colors: Edit CSS custom properties in style.css (lines 2-12)
- Fonts: Change Google Fonts import in index.html
- Layout: Modify grid and flexbox properties in style.css
- Content: Update data.js for projects and certifications

Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11+ (with some limitations)

License
- No license included — use freely and adapt for your needs.
