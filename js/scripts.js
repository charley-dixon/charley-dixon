// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navbar links
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;
  
          document.querySelector(hash).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Contact form submission alert
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (e) {
      alert('Your message has been sent!');
    });
  });
  