    // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() 
        {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            document.getElementById('mobile-menu').classList.add('hidden');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

        // Scroll listener for navbar
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled') ;
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.add('hidden');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Simple testimonial carousel
        let currentTestimonial = 0;
        const testimonialItems = document.querySelectorAll('#testimonial-carousel > div');
        const showTestimonial = (index) => {
            testimonialItems.forEach((item, i) => {
                if (i === index) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        };
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        // Initial setup
        window.addEventListener('DOMContentLoaded', () => {
            if (testimonialItems.length > 0) {
                showTestimonial(0);
            }
        });
    