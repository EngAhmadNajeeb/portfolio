let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Software Engineering ', 'Web Developer', 'Mobile Developer'],
    typeSpeed: 40,
    backSpeed: 40,
    delay: 500,
    loop: true
});
// جلب الروابط والأقسام
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// تابع حركة التمرير
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function updateActiveLink() {
        let currentSection = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();  // لضمان التطبيق عند تحميل الصفحة مباشرة
});
