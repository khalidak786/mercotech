// Mobile Navigation Toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Sticky header on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
