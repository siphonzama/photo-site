// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
  // Toggle mobile nav
mobileNav.classList.toggle('hidden');

  // Toggle icons
menuIcon.classList.toggle('hidden');
closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
});
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = target.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    }
});
});