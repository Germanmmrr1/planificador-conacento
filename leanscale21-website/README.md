# LeanScale21 Website

A modern, professional website for LeanScale21 - a consulting firm helping fintech and crypto startups scale operations efficiently.

## Overview

LeanScale21 specializes in:
- AI-Optimized Support (Zendesk & Intercom)
- Lean Operations & Process Optimization

This website showcases services, case studies, and provides easy contact options for potential clients.

## Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean design with professional color scheme (dark blue, charcoal, white with lime/orange accents)
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Interactive Elements** - Smooth animations and transitions
- **Contact Form** - Ready to integrate with your backend or form service
- **Calendly Integration Ready** - Placeholder for booking widget

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, lightweight and fast
- **Google Fonts** - Inter font family

## Project Structure

```
leanscale21-website/
├── index.html           # Homepage
├── services.html        # Services page
├── about.html          # About page
├── case-studies.html   # Case studies page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Pages

### Home (index.html)
- Hero section with clear value proposition
- Problem-solution framework
- Services preview
- Trust signals (companies worked with)
- Call-to-action sections

### Services (services.html)
- Detailed service descriptions
- Problem-solution frameworks
- Deliverables and results
- Process overview

### About (about.html)
- Founder background
- Core expertise
- Philosophy and principles
- Why work with LeanScale21

### Case Studies (case-studies.html)
- Real client results
- Before/after metrics
- Detailed implementation stories
- Business impact

### Contact (contact.html)
- Contact form
- Calendly integration placeholder
- FAQ section
- Contact information

## Setup & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Germanmmrr1/leanscale21-website.git
cd leanscale21-website
```

2. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

### Deployment Options

#### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Select source branch (usually `main`)
4. Your site will be published at `https://germanmmrr1.github.io/leanscale21-website/`

#### Netlify
1. Connect your GitHub repository
2. Build settings: Leave empty (static site)
3. Deploy

#### Vercel
1. Import repository from GitHub
2. Deploy with default settings

## Customization Guide

### Calendly Integration

1. Open `contact.html`
2. Find the `calendly-container` div
3. Replace the placeholder with your Calendly embed code:

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/YOUR-CALENDLY-LINK?hide_gdpr_banner=1"
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Contact Form Backend

The contact form in `contact.html` currently simulates submission. To connect to a real backend:

1. Open `script.js`
2. Find the contact form submission handler
3. Replace the simulation code with an actual API call:

```javascript
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    // Handle success
})
.catch((error) => {
    // Handle error
});
```

Popular form backends:
- **Formspree** - https://formspree.io
- **Netlify Forms** - Built into Netlify hosting
- **EmailJS** - https://www.emailjs.com
- **Custom backend** - Build your own API

### Color Customization

All colors are defined as CSS variables in `styles.css`:

```css
:root {
    --color-primary: #1E40AF;        /* Dark Blue */
    --color-secondary: #0F172A;      /* Charcoal */
    --color-accent: #84CC16;         /* Lime */
    --color-accent-orange: #F97316;  /* Orange */
    /* ... more colors */
}
```

Simply update these values to change the entire color scheme.

### Adding New Pages

1. Create a new HTML file (e.g., `blog.html`)
2. Copy the navigation and footer from an existing page
3. Add your content in between
4. Update the active state in navigation
5. Add a link in the footer if needed

## SEO Optimization

### Meta Tags
Each page includes:
- Title tag
- Meta description
- Keywords
- Viewport settings

Update these in each HTML file's `<head>` section.

### Sitemap
Create a `sitemap.xml` file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services.html</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add more pages -->
</urlset>
```

### Analytics

Add Google Analytics by inserting this before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: No heavy frameworks
- Fast loading: Minimal dependencies
- Optimized images: Use WebP format when possible
- Lazy loading ready: Can be added for images

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive font sizes

## Future Enhancements

Potential additions:
- Blog section with articles
- Client testimonials slider
- Team members page
- Resources/downloads section
- Newsletter signup
- Live chat integration
- Multi-language support

## Support

For questions or issues:
- Email: hello@leanscale21.com
- GitHub Issues: [Create an issue](https://github.com/Germanmmrr1/leanscale21-website/issues)

## License

Copyright © 2025 LeanScale21. All rights reserved.

## Credits

- Design & Development: Built with Claude Code
- Fonts: Inter by Google Fonts
- Icons: SVG icons embedded in HTML

---

Built with care for fintech startups scaling smarter.
