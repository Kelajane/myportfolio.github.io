console.log("JS LOADED");
console.log('SCROLLING...');


let menuIcon, navbar;

try {
    console.log("DOM READY");

    const debug = document.getElementById("debug");
    if (debug) debug.innerText = "JS WORKING";

    /* const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar'); */
    
    menuIcon = document.querySelector('#menu-icon');
    navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

/* navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');

        // reset icon back to hamburger
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});
 */

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {

    // 🔥 CLOSE MENU FIRST
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');

    // OPTIONAL: smooth scroll (better UX)
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });
});

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });
}

} catch (error) {
    console.error("ERROR FOUND:", error);
}


/****************** scroll section active link*****************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* window.onscroll = () => { */
window.addEventListener('scroll', () => {
    
    /* if (!navbar || !menuIcon) return;
    
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
    window.addEventListener('touchmove', () => {
        if (!navbar || !menuIcon) return;

        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }); */
    
    if (navbar && menuIcon && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
    
    /* window.addEventListener('wheel', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }); */
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document
                  .querySelector(`header nav a[href*="${id}"]`)
                  ?.classList.add('active');
            });
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});




/****************** scroll reveal *****************/

if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
        reset: false
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
}

/****************** typed js *****************/

if (typeof Typed !== 'undefined') {
    const typedElement = document.querySelector('.multiple-text');

    if (typedElement) {
        new Typed('.multiple-text', {
          strings: [
            'Frontend Developer',
            'UI/UX Designer',
            'Graphics Designer',
            'Blockchain Enthusiast'
          ],
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
          loop: true,
          cursorChar: '▌'
        });
    }
}

window.addEventListener('load', () => {
    window.dispatchEvent(new Event('scroll'));
});
