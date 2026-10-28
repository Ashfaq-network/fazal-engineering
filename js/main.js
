// Main JavaScript for Fazal Engineering

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2000);
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 968) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .service-card, .project-card, .magnetic');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursorFollower.style.transform = 'scale(1.5)';
                cursorFollower.style.borderColor = 'rgba(255, 69, 0, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
                cursorFollower.style.borderColor = 'var(--accent-color)';
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    let statsAnimated = false;
    
    const animateStats = () => {
        if (statsAnimated) return;
        statsAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            updateCounter();
        });
    };
    
    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Testimonials slider
    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentSlide = 0;
    const cardWidth = cards[0] ? cards[0].getBoundingClientRect().width + 32 : 400;
    const maxSlide = Math.max(0, cards.length - (window.innerWidth > 968 ? 3 : window.innerWidth > 768 ? 2 : 1));
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < maxSlide) {
                currentSlide++;
                track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
            }
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
            }
        });
    }
    
    // Auto slide testimonials
    setInterval(() => {
        if (cards.length > 0) {
            if (currentSlide < maxSlide) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
        }
    }, 5000);
    
    // Magnetic buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0px, 0px)';
        });
    });
    
    // Reveal on scroll
    const revealElements = document.querySelectorAll('[data-reveal], .reveal-fade');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
