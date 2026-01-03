/**
 * Main JavaScript File
 * Handles navigation, scroll effects, and general functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================
    // Theme Toggle
    // ============================================================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to 'light' mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const theme = htmlElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    
    // ============================================================
    // Navigation Toggle for Mobile
    // ============================================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    
    // ============================================================
    // Smooth Scrolling for Anchor Links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ============================================================
    // Active Navigation Link on Scroll
    // ============================================================
    const sections = document.querySelectorAll('.section');
    const navbar = document.querySelector('.navbar');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    
    // ============================================================
    // Navbar Scroll Effect
    // ============================================================
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    
    // ============================================================
    // Scroll to Top Button with Progress Circle
    // ============================================================
    const scrollTopBtn = document.getElementById('scrollTop');
    const scrollProgressCircle = document.getElementById('scrollProgressCircle');
    
    // Calculate circle circumference for progress animation
    if (scrollProgressCircle) {
        const radius = scrollProgressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        // Set up the circle
        scrollProgressCircle.style.strokeDasharray = circumference;
        scrollProgressCircle.style.strokeDashoffset = circumference;
        
        function updateScrollProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            
            // Update circle progress
            const offset = circumference - (scrollPercent * circumference);
            scrollProgressCircle.style.strokeDashoffset = offset;
        }
        
        // Add scroll listener for progress
        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial call
    }
    
    function toggleScrollTopButton() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    // ============================================================
    // Scroll Event Listener
    // ============================================================
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Debounce scroll events for better performance
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            updateActiveLink();
            handleNavbarScroll();
            toggleScrollTopButton();
        }, 10);
    });
    
    // Initial check
    updateActiveLink();
    handleNavbarScroll();
    toggleScrollTopButton();
    
    
    // ============================================================
    // Contact Form Handling
    // ============================================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    
    // ============================================================
    // Prevent Default for Empty Links
    // ============================================================
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    
    // ============================================================
    // Loading Animation for Images
    // ============================================================
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });
    
});


// ============================================================
// Utility Functions
// ============================================================

/**
 * Debounce function to limit the rate at which a function can fire
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
