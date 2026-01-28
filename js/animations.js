/**
 * Animation and Scroll Effects
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================================
    // Intersection Observer for Scroll Animations
    // ============================================================
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        
        // Animation options
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Optional: Stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Elements to animate
        const animatedElements = document.querySelectorAll(`
            .section-header,
            .service-card,
            .skill-category,
            .portfolio-item,
            .contact-item,
            .about-image,
            .about-text
        `);
        
        // Observe all elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    
    // ============================================================
    // Typing Animation for Home Section
    // ============================================================
    const titleElement = document.querySelector('.title');
    
    if (titleElement) {
        const titleText = titleElement.textContent;
        const typingSpeed = 100; // milliseconds per character
        const erasingSpeed = 50;
        const pauseDuration = 2000;
        
        // Uncomment below to enable typing animation
        /*
        titleElement.textContent = '';
        let charIndex = 0;
        let isTyping = true;
        
        function type() {
            if (isTyping) {
                if (charIndex < titleText.length) {
                    titleElement.textContent += titleText.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(() => {
                        isTyping = false;
                        type();
                    }, pauseDuration);
                }
            } else {
                if (charIndex > 0) {
                    titleElement.textContent = titleText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, erasingSpeed);
                } else {
                    setTimeout(() => {
                        isTyping = true;
                        type();
                    }, 500);
                }
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(type, 1000);
        */
    }
    
    
    // ============================================================
    // Counter Animation for Metrics
    // ============================================================
    const metricValues = document.querySelectorAll('.metric-value');
    
    function animateCounter(element) {
        const target = element.textContent.replace(/\D/g, ''); // Get numbers only
        const suffix = element.textContent.replace(/[0-9]/g, ''); // Get suffix (+ etc.)
        const duration = 2000; // Animation duration in ms
        const increment = Math.ceil(target / (duration / 16)); // 60fps
        
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = current + suffix;
        }, 16);
    }
    
    // Observe metrics for animation
    if ('IntersectionObserver' in window) {
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                    metricsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        metricValues.forEach(metric => {
            metricsObserver.observe(metric);
        });
    }
    
    
    // ============================================================
    // Parallax Effect for Home Section Background
    // ============================================================
    const homeSection = document.querySelector('.home-section');
    
    if (homeSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < homeSection.offsetHeight) {
                homeSection.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
            }
        });
    }
    
    
    // ============================================================
    // Skill Items Hover Animation
    // ============================================================
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        // Stagger animation on page load
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
        
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.3s ease';
    });
    
    
    // ============================================================
    // Mouse Move Effect for Cards (Optional)
    // ============================================================
    const cards = document.querySelectorAll('.service-card, .portfolio-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Uncomment to enable 3D tilt effect
            // card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            // card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    
    // ============================================================
    // Smooth Reveal Animation for Sections
    // ============================================================
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
    });
    
    // Reveal sections on scroll
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }
    
    
    // ============================================================
    // Dynamic Floating Skills Animation
    // ============================================================
    initFloatingSkills();
    
});


/**
 * Dynamic Floating Skills System
 * Displays rotating skill badges around the profile image
 */
function initFloatingSkills() {
    
    // Skills data with icons (from your skills section)
    const skills = [
        { name: 'C#', icon: 'fas fa-code', color: '#68217a' },
        { name: '.NET Core', icon: 'fas fa-network-wired', color: '#512bd4' },
        { name: 'Azure', icon: 'fab fa-microsoft', color: '#0089d6' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'TypeScript', icon: 'fab fa-js', color: '#3178c6' },
        { name: 'SQL Server', icon: 'fas fa-database', color: '#cc2927' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326ce5' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
        { name: 'ASP.NET', icon: 'fas fa-server', color: '#512bd4' },
        { name: 'REST API', icon: 'fas fa-plug', color: '#6366f1' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
        { name: 'Go', icon: 'fab fa-golang', color: '#00add8' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
        { name: 'Redis', icon: 'fas fa-memory', color: '#dc382d' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47a248' },
        { name: 'Kafka', icon: 'fas fa-stream', color: '#231f20' },
        { name: 'CI/CD', icon: 'fas fa-code-branch', color: '#6366f1' },
        { name: 'DevOps', icon: 'fas fa-infinity', color: '#0078d4' },
        { name: 'Microservices', icon: 'fas fa-cubes', color: '#8b5cf6' },
        { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    ];
    
    // Get skill badge elements
    const badges = document.querySelectorAll('.skill-badge');
    if (badges.length === 0) return;
    
    // Shuffle skills
    const shuffledSkills = [...skills].sort(() => Math.random() - 0.5);
    
    // Track which skills are currently shown
    let currentSkillIndices = [];
    let skillPool = [...shuffledSkills];
    
    // Configuration
    const config = {
        displayDuration: 3500,      // How long each skill stays visible
        staggerDelay: 600,          // Delay between each badge appearing
        rotationInterval: 4000,     // How often to rotate skills
        maxVisibleBadges: 6         // Maximum badges visible at once
    };
    
    /**
     * Get next skill from pool (cycles through all skills)
     */
    function getNextSkill() {
        if (skillPool.length === 0) {
            skillPool = [...shuffledSkills].sort(() => Math.random() - 0.5);
        }
        return skillPool.shift();
    }
    
    /**
     * Update a single badge with new skill
     */
    function updateBadge(badge, skill) {
        // First hide the badge
        badge.classList.remove('visible', 'float-1', 'float-2', 'float-3');
        badge.classList.add('hiding');
        
        // After exit animation, update content and show
        setTimeout(() => {
            badge.innerHTML = `<i class="${skill.icon}" style="color: ${skill.color}"></i><span>${skill.name}</span>`;
            badge.classList.remove('hiding');
            
            // Small delay before showing
            setTimeout(() => {
                badge.classList.add('visible');
                // Add random float animation
                const floatClass = `float-${Math.floor(Math.random() * 3) + 1}`;
                badge.classList.add(floatClass);
            }, 50);
        }, 400);
    }
    
    /**
     * Initialize badges with staggered entrance
     */
    function initializeBadges() {
        badges.forEach((badge, index) => {
            setTimeout(() => {
                const skill = getNextSkill();
                currentSkillIndices[index] = skill;
                badge.innerHTML = `<i class="${skill.icon}" style="color: ${skill.color}"></i><span>${skill.name}</span>`;
                badge.classList.add('visible');
                const floatClass = `float-${(index % 3) + 1}`;
                badge.classList.add(floatClass);
            }, index * config.staggerDelay);
        });
    }
    
    /**
     * Rotate skills - randomly replace some badges
     */
    function rotateSkills() {
        // Randomly select 2-3 badges to update
        const numToUpdate = Math.floor(Math.random() * 2) + 2;
        const badgeIndices = [...Array(badges.length).keys()].sort(() => Math.random() - 0.5).slice(0, numToUpdate);
        
        badgeIndices.forEach((badgeIndex, i) => {
            setTimeout(() => {
                const skill = getNextSkill();
                currentSkillIndices[badgeIndex] = skill;
                updateBadge(badges[badgeIndex], skill);
            }, i * 300);
        });
    }
    
    // Start the system
    initializeBadges();
    
    // Set up rotation interval
    setInterval(rotateSkills, config.rotationInterval);
    
    // Pause animation when tab is not visible (performance optimization)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            badges.forEach(badge => {
                badge.style.animationPlayState = 'paused';
            });
        } else {
            badges.forEach(badge => {
                badge.style.animationPlayState = 'running';
            });
        }
    });
}
