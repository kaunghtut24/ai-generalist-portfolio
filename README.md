# AI Generalist Portfolio - Modern 2025 Edition

A cutting-edge, fully responsive portfolio website designed for AI professionals, researchers, and practitioners. Features modern dark/light mode, interactive animations, and comprehensive content sections.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-green?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Mode Toggle** - Automatic system preference detection + manual toggle
- **Animated Gradients** - Dynamic background animations
- **Glassmorphism** - Frosted glass effects throughout
- **Micro-interactions** - Hover effects, transitions, and animations
- **Typing Effect** - Animated hero text
- **Responsive Design** - Mobile-first approach, works on all devices

### 📱 **Sections**
1. **Hero** - Eye-catching introduction with gradient text
2. **About** - Personal bio with skills tags
3. **Projects** - Showcase work with tech stacks and demo links
4. **Blog** - Latest insights and articles
5. **Open Source** - GitHub contributions with stats
6. **Speaking** - Conference talks and events
7. **Tools & Demos** - Interactive showcases
8. **Testimonials** - Social proof from colleagues
9. **Newsletter** - Email subscription CTA
10. **Certifications** - Professional credentials
11. **Contact** - Contact form with multiple backend options

### 🚀 **Technical Features**
- **Zero Dependencies** - Pure HTML, CSS, and JavaScript
- **SEO Optimized** - Meta tags, Open Graph, robots.txt, sitemap.xml
- **Accessibility** - WCAG 2.1 AA compliant
- **Performance** - System fonts, optimized CSS, image error handling
- **Security** - Content Security Policy configured
- **Version Control** - Git-ready with .gitignore

### 🛠️ **Built-in Functionality**
- Theme persistence (localStorage)
- Smooth scroll navigation
- Mobile hamburger menu
- Image lazy loading
- Form validation ready
- GitHub integration ready

---

## 📦 What's Included

```
portfolio/
├── index.html              # Main HTML structure
├── style.css               # Modern stylesheet with dark mode
├── script.js               # JavaScript with all renderers
├── data.js                 # Content data (easy to customize)
├── favicon.svg             # Vector favicon
├── app-icon.svg            # Mobile app icon
├── robots.txt              # SEO for search engines
├── sitemap.xml             # Site structure for crawlers
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── DEPLOYMENT.md           # Comprehensive deployment guide
├── IMAGE_OPTIMIZATION.md   # Image optimization guide
└── UI_UX_IMPROVEMENT_PLAN.md  # Design decisions and planning
```

---

## 🚀 Quick Start

### 1. **Download & Extract**
```bash
# If you have the files locally, navigate to the directory
cd ai_generalist_portfolio
```

### 2. **Customize Your Content**

#### **A. Update Basic Info in `index.html`**
Search and replace these placeholders:
- `[Your Name]` → Your actual name
- `yourFormId` → Your Formspree form ID
- `yourusername` → Your GitHub username
- `yourprofile` → Your LinkedIn profile
- `you@example.com` → Your email address

#### **B. Update `data.js` with Your Information**
Edit the `window.SITE_DATA` object:

```javascript
// 1. Update your projects
"projects": [
  {
    "title": "Your Project Name",
    "description": "What it does...",
    "github": "https://github.com/yourusername/project",
    "demo": "https://your-demo-link.com",
    "tech": ["React", "Node.js", "Python"],
    "stars": 150
  },
  // Add more projects...
],

// 2. Add your blog posts
"blog": [
  {
    "title": "Your Article Title",
    "excerpt": "Brief description...",
    "date": "2025-01-15",
    "readTime": "5 min read",
    "link": "https://yourblog.com/article"
  },
  // Add more posts...
],

// 3. Update social links
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "twitter": "https://twitter.com/yourusername",
  "email": "your@email.com"
}
```

#### **C. Update `sitemap.xml`**
Replace `your-domain.com` with your actual domain.

### 3. **Set Up Contact Form** (Choose One)

#### **Option A: Formspree (Recommended - Free)**
1. Visit [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your Form ID
4. Replace `yourFormId` in `index.html` (line ~163)

#### **Option B: Netlify Forms (If hosting on Netlify)**
1. Add `name="contact"` to the form
2. Add `data-netlify="true"` attribute
3. Remove the `action` attribute
4. Add: `<input type="hidden" name="form-name" value="contact">`

#### **Option C: FormSubmit (No account needed)**
1. Replace action URL with: `https://formsubmit.co/YOUR_EMAIL`
2. Add: `<input type="hidden" name="_captcha" value="false">`

### 4. **Test Locally**
Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

---

## 🎨 Customization

### **Change Colors**
Edit CSS custom properties in `style.css` (lines 4-59):

```css
:root {
  /* Light theme colors */
  --clr-primary: #0A3D62;      /* Main brand color */
  --clr-accent: #00D4FF;        /* Accent color */
  --clr-secondary: #6366F1;     /* Secondary color */
  /* ... more colors */
}

body[data-theme="dark"] {
  --clr-primary: #60A5FA;       /* Dark mode primary */
  --clr-accent: #00D4FF;        /* Dark mode accent */
  /* ... dark mode overrides */
}
```

### **Change Fonts**
Edit the Google Fonts import in `index.html` (line ~18):

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

Then update in `style.css` (lines 37-39):

```css
--font-display:'Inter', sans-serif;
--font-body: -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### **Add/Remove Sections**
1. **HTML**: Add section in `index.html`
2. **CSS**: Add styles in `style.css`
3. **JS**: Add renderer in `script.js`
4. **Data**: Add to `data.js`

### **Change Layout**
- Grid layouts: `.grid` class (line ~331 in style.css)
- Spacing: `--container-w` variable (line ~46)
- Border radius: `--radius` variable (line ~43)

---

## 🌙 Dark Mode

The portfolio includes a sophisticated dark mode system:

### **Features**
- **Auto-detection**: Respects system `prefers-color-scheme`
- **Manual toggle**: Sun/moon button in navigation
- **Persistence**: Saves choice to localStorage
- **Smooth transitions**: Animated color changes
- **Accessibility**: High contrast ratios in both modes

### **Usage**
Users can toggle themes by:
- Clicking the theme toggle button in the navigation
- System preference is detected on first visit
- Choice is saved and persists across sessions

### **Customization**
Edit dark mode colors in `style.css` (lines 92-118):

```css
body[data-theme="dark"] {
  --clr-primary: #60A5FA;     /* Light blue for better visibility */
  --clr-light: #0F172A;       /* Dark background */
  --clr-card: #1E293B;        /* Card background */
  --clr-text: #F8FAFC;        /* Light text */
}
```

---

## 📊 Content Guide

### **Projects** (data.js lines 3-27)
Showcase your best work with:
- **Title**: Project name
- **Description**: What it does (2-3 sentences)
- **GitHub link**: Repository URL
- **Demo link**: Live version (optional)
- **Tech stack**: Array of technologies used
- **Stars**: GitHub stars (optional)

### **Blog Posts** (data.js lines 29-50)
Share your thoughts:
- **Title**: Article headline
- **Excerpt**: Brief description (1-2 sentences)
- **Date**: Publication date (YYYY-MM-DD)
- **Read time**: Estimated reading time
- **Link**: Full article URL

### **Open Source** (data.js lines 52-76)
Highlight contributions:
- **Name**: Repository name
- **Description**: What it does
- **GitHub link**: Repository URL
- **Stars**: Star count
- **Language**: Programming language
- **Forks**: Fork count

### **Speaking** (data.js lines 78-99)
Show your talks:
- **Title**: Talk title
- **Event**: Conference or meetup name
- **Location**: City, Country
- **Date**: Event date
- **Video**: Recording link (optional)
- **Slides**: Slides link (optional)

### **Tools & Demos** (data.js lines 101-119)
Interactive showcases:
- **Name**: Tool name
- **Description**: What it does
- **Icon**: chart, edit, or tag
- **Demo**: Live demo URL

### **Testimonials** (data.js lines 121-139)
Social proof:
- **Quote**: What they said
- **Author**: Person's name
- **Title**: Their job title
- **Image**: Photo URL (optional)

### **Certifications** (data.js lines 141-156)
Professional credentials:
- **Name**: Certification name
- **Badge image**: Certificate badge URL
- **Link**: Verification URL

---

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to:

- **GitHub Pages** (Free)
- **Netlify** (Free tier)
- **Vercel** (Free tier)
- **Surge.sh** (Free)

### **Quick Deploy**

#### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main
4. Save

#### Netlify
1. Drag & drop folder to [netlify.com](https://netlify.com)
2. Or connect GitHub repository
3. Auto-deploys on every push

#### Vercel
1. Import from GitHub at [vercel.com](https://vercel.com)
2. Auto-deploys on every push

---

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- **WCAG 2.1 AA** compliant
- **Semantic HTML5** elements
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** visible
- **Skip links** for screen readers
- **Alt text** for all images
- **Color contrast** ratios > 4.5:1
- **Reduced motion** support (respected)

---

## 🖼️ Image Optimization

See [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md) for comprehensive guide on:

- Choosing the right image format (WebP, PNG, JPEG)
- Compression tools and techniques
- Responsive images
- Lazy loading
- Best practices

### **Quick Tips**
- Use **WebP** for photos (smaller file size)
- Use **SVG** for icons (infinitely scalable)
- Keep images under **500KB** each
- Add **alt text** for all images
- Use **descriptive filenames**

---

## 🎯 SEO

The portfolio is SEO-optimized:

- **Meta tags** for description, keywords
- **Open Graph** tags for social sharing
- **Twitter Card** support
- **robots.txt** for search engine guidance
- **sitemap.xml** for site structure
- **Semantic HTML** for better crawling
- **Fast loading** times
- **Mobile-friendly** design

### **Before Deploying**
1. Update `sitemap.xml` with your domain
2. Update `robots.txt` with your domain
3. Add meta description in `index.html`
4. Add Open Graph image URL

---

## 🛠️ Development

### **Local Development**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### **Git Workflow**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### **Project Structure**
```
data.js
├── projects: [...]       # Your work
├── blog: [...]          # Articles
├── opensource: [...]    # GitHub repos
├── speaking: [...]      # Talks
├── tools: [...]         # Demos
├── testimonials: [...]  # Reviews
├── certifications: [...] # Credentials
└── social: {...}        # Social links
```

---

## 🔧 Troubleshooting

### **Theme toggle not working**
- Check that `script.js` is loaded
- Verify theme toggle HTML exists
- Check browser console for errors

### **Sections not showing**
- Verify data is in `data.js`
- Check section IDs match in HTML
- Ensure containers have correct IDs

### **Form not working**
- Verify Formspree/FormSubmit configuration
- Check form action URL
- Test with Formspree dashboard

### **Images not loading**
- Check image URLs are correct
- Verify CORS settings for external images
- Use `img.onerror` for fallback (already included)

### **Mobile menu not working**
- Check `#nav-toggle` element exists
- Verify `script.js` is loaded
- Check event listeners are attached

---

## 📱 Browser Support

- **Chrome/Edge** 88+
- **Firefox** 85+
- **Safari** 14+
- **Mobile Safari** 14+
- **Chrome Mobile** 88+

*Uses modern CSS features (CSS Grid, Custom Properties, Backdrop Filter)*

---

## 📄 File Documentation

### Core Files
- **index.html** - Main HTML structure, 11 sections
- **style.css** - 540+ lines, dark mode ready, responsive
- **script.js** - 300+ lines, 7 section renderers, theme toggle
- **data.js** - All content in one place, easy to edit

### Configuration
- **favicon.svg** - Vector icon, 100×100px
- **app-icon.svg** - Mobile icon, 512×512px
- **robots.txt** - SEO directives
- **sitemap.xml** - Site structure (update domain)
- **.gitignore** - Node, IDE, build files

### Documentation
- **README.md** - This file
- **DEPLOYMENT.md** - Hosting guide (4 platforms)
- **IMAGE_OPTIMIZATION.md** - Image best practices
- **UI_UX_IMPROVEMENT_PLAN.md** - Design decisions

---

## 🎓 Learning Resources

### **Technologies Used**
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

### **Design Inspiration**
- [Awwwards](https://www.awwwards.com/) - Website design trends
- [Dribbble](https://dribbble.com/) - UI/UX inspiration
- [UI Movement](https://uimovement.com/) - UI patterns

---

## 🤝 Contributing

This is a template. To customize it for your needs:

1. Fork/download the files
2. Update content in `data.js`
3. Customize styles in `style.css`
4. Deploy to your hosting platform
5. Share with the world!

---

## 📝 License

No license included — use freely and adapt for your needs.

---

## 🆘 Support

### **Common Customizations**
- **Change colors**: See Customization section above
- **Add section**: Add HTML, CSS, JS renderer, and data
- **Change fonts**: See Fonts section above
- **Update content**: Edit `data.js`

### **Getting Help**
- Check this README first
- Review DEPLOYMENT.md for hosting issues
- Check browser console for errors
- Validate HTML/CSS for syntax issues

---

## 🎉 Acknowledgments

- Design inspired by modern AI professionals
- Icons from Heroicons
- Fonts from Google Fonts
- Built with accessibility in mind

---

## 📈 Stats

- **15 files** total
- **~2,500 lines** of code
- **11 sections** for content
- **7 content types** in data.js
- **15+ modern features**
- **100% dependency-free**

---

**Ready to showcase your AI expertise? Deploy today! 🚀**

---

## 🔗 Quick Links

- [Deployment Guide](./DEPLOYMENT.md)
- [Image Optimization](./IMAGE_OPTIMIZATION.md)
- [UI/UX Plan](./UI_UX_IMPROVEMENT_PLAN.md)
- [Form Setup](#set-up-contact-form)
- [Customization](#-customization)
- [Dark Mode](#-dark-mode)

---

**Made with ❤️ for the AI community**
