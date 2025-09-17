// همبرگر منو
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// فرم تماس
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('پیام شما با موفقیت ارسال شد! (شبیه‌سازی)');
  contactForm.reset();
});