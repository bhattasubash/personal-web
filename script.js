(function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const logo = document.getElementById('siteLogo');
  const heroImage = document.getElementById('heroImage');
  const year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Image fallbacks so the page works before you add real files
  function addFallback(imgEl, fallbackPath){
    if (!imgEl) return;
    imgEl.addEventListener('error', () => {
      if (imgEl.src.includes(fallbackPath)) return; // avoid loop
      imgEl.src = fallbackPath;
    });
  }
  addFallback(logo, './assets/logo-placeholder.svg');
  addFallback(heroImage, './assets/hero-placeholder.svg');

  // Newsletter form UX (front-end only)
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const msg = document.getElementById('newsletterMsg');

  if (form && emailInput && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = 'Please enter a valid email address.';
        return;
      }
      localStorage.setItem('newsletterEmail', email);
      msg.textContent = 'Thanks! You\'re on the list.';
      emailInput.value = '';
    });
  }
})();
