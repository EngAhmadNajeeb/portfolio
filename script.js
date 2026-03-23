document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const header = document.querySelector('.main-header');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Animate scrolling to sections when nav links are clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    const headerOffset = header ? header.offsetHeight : 0;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                if (hamburgerMenu) {
                    hamburgerMenu.classList.remove('active');
                }
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.main-nav .nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});
