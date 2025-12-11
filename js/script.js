// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        updateHamburgerIcon();
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        updateHamburgerIcon();
        // Set active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Update hamburger icon
function updateHamburgerIcon() {
    if (navMenu.classList.contains('active')) {
        hamburger.style.animation = 'rotate 0.3s ease';
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// SCROLL ANIMATION (AOS - Animate on Scroll)
// ============================================

class AnimateOnScroll {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            this.elements.forEach(element => {
                observer.observe(element);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.elements.forEach(element => {
                this.animateElement(element);
            });
        }
    }

    animateElement(element) {
        element.style.opacity = '1';
        element.style.animation = `${this.getAnimation(element)} 0.8s ease forwards`;
        
        const delay = element.getAttribute('data-aos-delay');
        if (delay) {
            element.style.animationDelay = `${delay}ms`;
        }
    }

    getAnimation(element) {
        const animation = element.getAttribute('data-aos');
        const animationMap = {
            'fade-up': 'fadeInUp',
            'fade-down': 'fadeInDown',
            'fade-left': 'fadeInLeft',
            'fade-right': 'fadeInRight',
            'zoom-in': 'zoomIn'
        };
        return animationMap[animation] || 'fadeInUp';
    }
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    new AnimateOnScroll();
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! Thank you for reaching out.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// PROJECT FILTER FUNCTIONALITY
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-detailed-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'grid';
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

class ProgressBars {
    constructor() {
        this.bars = document.querySelectorAll('.skill-progress');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateBar(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            this.bars.forEach(bar => {
                observer.observe(bar);
            });
        }
    }

    animateBar(bar) {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.style.transition = 'width 1.5s ease';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProgressBars();
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'var(--shadow)';
        }
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('[data-parallax]');
    
    elements.forEach(element => {
        const parallaxValue = element.getAttribute('data-parallax');
        element.style.transform = `translateY(${scrolled * parallaxValue}px)`;
    });
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.backgroundColor = '#0052a3';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.backgroundColor = 'var(--primary-color)';
});

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        // Add ripple animation keyframes if not already present
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', '');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// TYPED TEXT EFFECT (Optional)
// ============================================

function typeText(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;

    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };

    type();
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// FORM INPUT FOCUS ANIMATION
// ============================================

const inputs = document.querySelectorAll('.form-input, .form-textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
        this.style.boxShadow = '0 0 0 3px rgba(0, 102, 204, 0.1)';
    });

    input.addEventListener('blur', function() {
        this.style.borderColor = '#e0e0e0';
        this.style.boxShadow = 'none';
    });
});

// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    // User prefers dark mode - you can implement dark mode here
    // document.body.classList.add('dark-mode');
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get current page for active nav link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ============================================
// LOG INITIALIZATION
// ============================================

console.log('%c Portfolio Website Loaded', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%c Welcome to the portfolio of Aniruddha Pranav M', 'color: #00d4ff; font-size: 12px;');
