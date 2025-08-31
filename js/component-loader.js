/**
 * Component Loader
 * Dynamically loads HTML components into the main page
 */

class ComponentLoader {
    constructor() {
        this.componentsPath = 'components/';
        this.components = [
            { name: 'navigation', target: '#navigation-container' },
            { name: 'hero', target: '#hero-container' },
            { name: 'about', target: '#about-container' },
            { name: 'skills', target: '#skills-container' },
            { name: 'projects', target: '#projects-container' },
            { name: 'contact', target: '#contact-container' },
            { name: 'footer', target: '#footer-container' }
        ];
    }

    async loadComponent(componentName, targetSelector) {
        try {
            const response = await fetch(`${this.componentsPath}${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName} component`);
            }
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                targetElement.innerHTML = html;
            } else {
                console.error(`Target element ${targetSelector} not found`);
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }

    async loadAllComponents() {
        const loadPromises = this.components.map(component => 
            this.loadComponent(component.name, component.target)
        );
        
        await Promise.all(loadPromises);
        
        // Re-initialize any necessary event listeners after components are loaded
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Re-initialize smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Re-initialize back to top button functionality
        const backToTopButton = document.getElementById('backToTop');
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Update active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.navbar-nav .nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 80;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});