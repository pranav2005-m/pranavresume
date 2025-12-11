# Professional Student Portfolio

A modern, responsive, and animated student portfolio website for Aniruddha Pranav M - B.E Electronics & Instrumentation Engineering student.

## 🌟 Features

### Multi-Page Design
- **Home Page** - Eye-catching hero section with featured projects
- **About Page** - Personal information, education timeline, and interests
- **Projects Page** - Detailed project showcase with filtering capabilities
- **Skills Page** - Comprehensive skill assessment with progress bars and certifications
- **Contact Page** - Contact form and communication details

### Professional Animations
- **Scroll-triggered animations** - Elements animate as you scroll
- **Smooth transitions** - Hover effects and transitions throughout
- **Progress bar animations** - Skill bars fill on scroll
- **Floating elements** - Subtle floating animations
- **Ripple effects** - Button click ripple animations
- **Scroll to top button** - Floating action button

### Responsive Design
- **Mobile-first approach** - Works perfectly on all devices
- **Hamburger menu** - Mobile navigation
- **Adaptive layouts** - Responsive grid system
- **Optimized performance** - Fast loading and smooth interactions

### Design System
- **Modern color scheme** - Professional blue and cyan gradient
- **Consistent typography** - Clean, readable fonts
- **Spacing standards** - Proper margins and padding
- **Shadow effects** - Depth and layering

## 📁 Project Structure

```
pranavresume/
├── index.html           # Home page
├── about.html           # About page
├── projects.html        # Projects showcase
├── skills.html          # Skills & certifications
├── contact.html         # Contact page
├── css/
│   └── style.css       # All styling and animations
├── js/
│   └── script.js       # Interactive functionality
└── assets/
    └── (profile images can be added here)
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works with local file system

### Installation
1. Navigate to the project directory
2. Open `index.html` in your web browser
3. Or serve the files using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00d4ff;
    --accent-color: #ff6b6b;
    /* ... more colors ... */
}
```

### Adding Profile Image
1. Place your profile image in the `assets/` folder
2. Update the image path in HTML files:
   ```html
   <img src="assets/profile.jpg" alt="Your Name">
   ```

### Adding Projects
1. Open `projects.html`
2. Add new project cards following the existing structure:
   ```html
   <div class="project-detailed-card" data-category="iot">
       <!-- project content -->
   </div>
   ```

### Updating Personal Information
- Edit the email, phone, and location details in each page
- Update the education details in `about.html`
- Modify project descriptions to match your work

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🎯 Animations Included

### Fade Animations
- Fade Up - Elements slide up while fading in
- Fade Down - Elements slide down while fading in
- Fade Left - Elements slide left while fading in
- Fade Right - Elements slide right while fading in

### Other Animations
- **Zoom In** - Scale animation with opacity
- **Float** - Gentle floating up and down
- **Pulse** - Opacity pulsing effect
- **Glow** - Box shadow glow effect
- **Bounce** - Bouncing animation
- **Ripple** - Button click ripple effect

## 🔧 JavaScript Features

### Implemented Functions
- Hamburger menu toggle for mobile
- Scroll-triggered animations with Intersection Observer
- Smooth scroll navigation
- Contact form validation and submission
- Project filtering by category
- Progress bar animations
- Scroll to top button
- Active navigation highlighting
- Form input focus effects
- Navbar shadow on scroll

## 📧 Contact Form

The contact form includes:
- Name, Email, Subject, and Message fields
- Email validation
- Success/error notifications
- Responsive design

**Note**: Currently uses simulation. To make it functional, connect to a backend service (Node.js, Python Flask, etc.)

## 🌐 SEO Optimization Tips

1. Add meta descriptions to each page
2. Use semantic HTML elements
3. Optimize images for web
4. Add alt text to all images
5. Use proper heading hierarchy
6. Mobile-friendly design (already implemented)

## ⚡ Performance Tips

1. Compress images before uploading
2. Minify CSS and JavaScript for production
3. Use lazy loading for images
4. Enable browser caching
5. Consider using a CDN for external resources

## 🎓 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - No dependencies, pure vanilla JS
- **Font Awesome** - Icons (via CDN)

## 📄 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Tips for Deployment

1. **GitHub Pages**: Upload to a GitHub repository and enable Pages
2. **Netlify**: Drag and drop the folder
3. **Vercel**: Connect your Git repository
4. **Traditional Hosting**: Upload files via FTP

## 📝 SEO Meta Tags to Add

Add to each page's `<head>`:

```html
<meta name="description" content="Portfolio of Aniruddha Pranav M">
<meta name="keywords" content="IoT, Robotics, Automation, Engineering">
<meta name="author" content="Aniruddha Pranav M">
<meta property="og:title" content="Aniruddha Pranav M - Portfolio">
<meta property="og:description" content="Student Portfolio">
<meta property="og:type" content="website">
<meta property="og:url" content="Your website URL">
```

## 💡 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Blog/Article section
- [ ] PDF download resume
- [ ] Testimonials section
- [ ] Statistics/achievements counter
- [ ] Photo gallery
- [ ] Integrated email backend
- [ ] Certificate display
- [ ] Achievement timeline

## 📧 Contact

For any questions or suggestions, feel free to contact:
- **Email**: maniruddhapranav@gmail.com
- **Phone**: +91 999 438 1659
- **LinkedIn**: linkedin.com/in/aniruddha-pranav-m-29225

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your needs.

## 🙏 Credits

- Font Awesome for icons
- Google Fonts for typography
- Inspired by modern web design practices

---

**Last Updated**: December 2025
**Version**: 1.0
