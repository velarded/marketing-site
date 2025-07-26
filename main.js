          
        window.addEventListener('scroll', function () {
            const navBg = document.querySelector('.nav-background');
            if (window.scrollY > window.innerHeight) {
            navBg.classList.add('show');
            } else {
            navBg.classList.remove('show');
            }
        });

        
        // Mobile menu toggle

        const menuToggle = document.getElementById('menu-toggle');

        const mobileMenu = document.getElementById('mobile-menu');

        

        menuToggle.addEventListener('click', () => {

            mobileMenu.classList.toggle('hidden');

        });

        

        // Service popup functionality

        document.querySelectorAll('.service-popup-btn').forEach(button => {

            button.addEventListener('click', () => {

                const popupId = button.getAttribute('data-popup');

                const popup = document.getElementById(popupId);

                popup.style.display = 'block';

                document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open

            });

        });

        

        // Close service popups

        document.querySelectorAll('.close-popup').forEach(closeBtn => {

            closeBtn.addEventListener('click', function() {

                const popup = this.closest('.service-popup');

                popup.style.display = 'none';

                document.body.style.overflow = 'auto'; // Re-enable scrolling

            });

        });

        

        // Close popups when clicking outside

        window.addEventListener('click', function(e) {

            document.querySelectorAll('.service-popup').forEach(popup => {

                if (e.target === popup) {

                    popup.style.display = 'none';

                    document.body.style.overflow = 'auto';

                }

            });

        });

        

        // Smooth scrolling for anchor links

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener('click', function (e) {

                e.preventDefault();

                

                const targetId = this.getAttribute('href');

                const targetElement = document.querySelector(targetId);

                

                if (targetElement) {

                    window.scrollTo({

                        top: targetElement.offsetTop - 80, // Adjust for fixed header

                        behavior: 'smooth'

                    });

                    

                    // Close mobile menu if open

                    if (!mobileMenu.classList.contains('hidden')) {

                        mobileMenu.classList.add('hidden');

                    }

                }

            });

        });

        

        // Modal functionality for Terms, Privacy, and Cookie policies

        const termsLink = document.getElementById('terms-link');

        const privacyLink = document.getElementById('privacy-link');

        const cookieLink = document.getElementById('cookie-link');

        

        const termsModal = document.getElementById('terms-modal');

        const privacyModal = document.getElementById('privacy-modal');

        const cookieModal = document.getElementById('cookie-modal');

        

        // Open modals

        termsLink.addEventListener('click', function(e) {

            e.preventDefault();

            termsModal.style.display = 'block';

            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open

        });

        

        privacyLink.addEventListener('click', function(e) {

            e.preventDefault();

            privacyModal.style.display = 'block';

            document.body.style.overflow = 'hidden';

        });

        

        cookieLink.addEventListener('click', function(e) {

            e.preventDefault();

            cookieModal.style.display = 'block';

            document.body.style.overflow = 'hidden';

        });

        

        // Close modals with X button

        document.querySelectorAll('.close-modal').forEach(closeBtn => {

            closeBtn.addEventListener('click', function() {

                const modalId = this.getAttribute('data-modal');

                document.getElementById(modalId).style.display = 'none';

                document.body.style.overflow = 'auto'; // Re-enable scrolling

            });

        });

        

        // Close modals when clicking outside

        window.addEventListener('click', function(e) {

            if (e.target === termsModal) {

                termsModal.style.display = 'none';

                document.body.style.overflow = 'auto';

            }

            if (e.target === privacyModal) {

                privacyModal.style.display = 'none';

                document.body.style.overflow = 'auto';

            }

            if (e.target === cookieModal) {

                cookieModal.style.display = 'none';

                document.body.style.overflow = 'auto';

            }

        });

        

        // Check for form submission success

        window.addEventListener('DOMContentLoaded', (event) => {

            // Check if URL has a success parameter

            const urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has('success')) {

                document.getElementById('form-success').style.display = 'block';

                

                // Scroll to contact section

                const contactSection = document.getElementById('contact');

                if (contactSection) {

                    window.scrollTo({

                        top: contactSection.offsetTop - 80,

                        behavior: 'smooth'

                    });

                }

                

                // Hide success message after 5 seconds

                setTimeout(() => {

                    document.getElementById('form-success').style.display = 'none';

                }, 5000);

            }

        });
