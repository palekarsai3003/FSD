document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navLinks) {
        // Toggle menu on click
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Toggle Icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when link is clicked
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- 2. Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                if(navLinks) navLinks.classList.remove('nav-active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#000000'; // Solid black on scroll
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '20px 0';
        }
    });

    // --- 4. Contact Form Success Message ---
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the actual page refresh

            // Show the success message
            successMessage.style.display = 'block';

            // Clear the form fields
            contactForm.reset();

            // Hide the message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        });
    }

});