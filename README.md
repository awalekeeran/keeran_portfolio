# 🚀 Keeran - Portfolio

A modern, responsive, and highly customizable portfolio website built with vanilla HTML, CSS, and JavaScript. Features a unique design system, particle animations, glassmorphism effects, and smooth scroll animations.

![Portfolio Preview](./assets/images/preview.png)

## ✨ Features

### 🎨 Design & UI
- **Configurable Design System** - CSS custom properties for easy theming
- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **Glassmorphism Effects** - Modern glass card designs
- **Particle Background** - Interactive particle animation
- **Gradient Text Effects** - Eye-catching gradient typography
- **Smooth Animations** - Scroll-triggered reveal animations
- **Responsive Design** - Mobile-first, works on all devices

### 🛠️ Technical Features
- **Vanilla JavaScript** - No framework dependencies
- **Modular Architecture** - Clean, organized codebase
- **Performance Optimized** - Lazy loading, throttling, debouncing
- **Accessibility** - WCAG compliant, keyboard navigation
- **SEO Friendly** - Semantic HTML, meta tags
- **Progressive Enhancement** - Works without JavaScript

### 📱 Sections
- **Hero** - Eye-catching introduction with typing animation
- **About** - Professional summary with statistics
- **Skills** - Technical skills organized by category
- **Experience** - Timeline of work history
- **Projects** - Featured project showcase
- **Contact** - Contact form with validation

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- (Optional) Node.js for development tools

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/awalekeeran/keeran_portfolio.git
   cd keeran_portfolio
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   or simply open `index.html` in your browser

4. **View the portfolio**
   Open http://localhost:3000 (or the file directly)

## 📁 Project Structure

```
keeran_portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Design system variables
│   ├── base.css           # Base styles & reset
│   ├── components.css     # Component styles
│   ├── animations.css     # Animations & effects
│   └── responsive.css     # Media queries
├── js/
│   ├── particles.js       # Particle background
│   ├── theme.js          # Theme management
│   ├── animations.js     # Scroll animations
│   ├── navigation.js     # Navigation logic
│   ├── form.js           # Form validation
│   └── main.js           # Main entry point
├── assets/
│   └── images/           # Images and media
├── docs/
│   ├── SETUP.md          # Setup guide
│   └── CUSTOMIZATION.md  # Customization guide
└── README.md             # This file
```

## 🎨 Customization

The portfolio is built with customization in mind. See [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) for detailed instructions.

### Quick Theme Customization

Edit `css/variables.css` to change:
- **Colors** - Primary, secondary, accent colors
- **Typography** - Fonts, sizes, weights
- **Spacing** - Margins, padding, gaps
- **Animations** - Timing, easing functions

### Content Customization

1. **Personal Information** - Edit `index.html`
2. **Skills & Experience** - Update respective sections
3. **Projects** - Add your project details
4. **Social Links** - Update footer and contact section

## 🔧 Configuration

### Theme Presets

Uncomment theme presets in `css/variables.css`:

```css
/* Ocean Theme */
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Sunset Theme */
:root {
  --gradient-primary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* Forest Theme */
:root {
  --gradient-primary: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}
```

### Particle Settings

Modify in `js/particles.js`:

```javascript
this.particleCount = 80;           // Number of particles
this.connectionDistance = 150;     // Connection line distance
this.mouse.radius = 150;           // Mouse interaction radius
```

## 📝 Content Updates

### Adding Projects

Add a new project card in `index.html`:

```html
<div class="project-card glass-card" data-animate="fade-up">
  <div class="project-image">
    <!-- Add your project image -->
  </div>
  <div class="project-content">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Description...</p>
    <div class="project-tags">
      <span class="tag">React</span>
      <!-- Add more tags -->
    </div>
  </div>
</div>
```

### Updating Skills

Modify skill categories in the Skills section:

```html
<div class="skill-category glass-card">
  <h3 class="category-title">Your Category</h3>
  <ul class="skill-list">
    <li><span class="skill-bullet"></span>Your Skill</li>
  </ul>
</div>
```

## 🚢 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select your branch and save
4. Visit `https://yourusername.github.io/keeran_portfolio`

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `.` (root)
4. Deploy!

### Vercel

```bash
npm i -g vercel
vercel
```

## 🧪 Testing

- **Accessibility**: Use Lighthouse in Chrome DevTools
- **Responsiveness**: Test on different devices and browsers
- **Performance**: Check loading speed with PageSpeed Insights

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Keeran**
- GitHub: [@awalekeeran](https://github.com/awalekeeran)
- LinkedIn: [@awalekeeran](https://linkedin.com/in/awalekiran)
- Email: awalekeeran@gmail.com

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from various portfolio designs

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

Made with ❤️ by Keeran