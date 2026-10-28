// GSAP Animations for Fazal Engineering

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    // Hero animations
    const tl = gsap.timeline({ delay: 2 });
    
    tl.from('.hero-subtitle span', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.split-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-buttons .btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-scroll', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.3');
    
    // Parallax effect on hero video
    gsap.to('.hero-video', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // About section animation
    gsap.from('.about-image', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.from('.about-content', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // About features stagger
    gsap.from('.about-feature', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Stats animation
    gsap.from('.stat-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.stats',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Testimonials animation
    gsap.from('.testimonial-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // CTA section
    gsap.from('.cta-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Footer animation
    gsap.from('.footer-brand, .footer-links, .footer-contact', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Tilt effect for cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
            max: 10,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
            scale: 1.02
        });
    }
});
