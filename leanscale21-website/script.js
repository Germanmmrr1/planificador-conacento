/**
 * LeanScale21 Website JavaScript
 * Handles mobile navigation, form submissions, and smooth interactions
 */

// ===================================
// Mobile Navigation Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formStatus = document.getElementById('form-status');
        const submitButton = contactForm.querySelector('button[type="submit"]');

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate form submission (replace with actual API call)
        // In production, you would send this to your backend or form handling service
        setTimeout(function() {
            // Success simulation
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you for your message! We\'ll get back to you within 24 hours.';
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';

            // Hide success message after 5 seconds
            setTimeout(function() {
                formStatus.style.display = 'none';
            }, 5000);

            // In production, replace the above with an actual API call:
            /*
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Thank you for your message! We\'ll get back to you within 24 hours.';
                contactForm.reset();
            })
            .catch((error) => {
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Sorry, there was an error sending your message. Please try again or email us directly.';
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });
            */
        }, 1500);
    });
}

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or if the target element doesn't exist
        if (href === '#' || href === '#calendly-embed') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation class
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.service-card, .problem-card, .expertise-card, .why-card, .case-study, .process-step'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===================================
// Form Validation Enhancement
// ===================================

if (contactForm) {
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '#10B981';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#3B82F6';
        });
    });

    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#EF4444';
            } else if (this.value) {
                this.style.borderColor = '#10B981';
            }
        });
    }
}

// ===================================
// Console Welcome Message
// ===================================

console.log(
    '%cLeanScale21',
    'font-size: 24px; font-weight: bold; color: #1E40AF;'
);
console.log(
    '%cHelping fintech startups scale smarter.',
    'font-size: 14px; color: #64748B;'
);
console.log(
    '%cInterested in working together? Visit https://leanscale21.com/contact',
    'font-size: 12px; color: #84CC16;'
);
