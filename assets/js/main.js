// ============================================
// chuyang1008.github.io - Shared JavaScript
// ============================================

(function () {
  'use strict';

  // --- Navbar scroll effect ---
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('site-navigation');
  if (toggle && links) {
    function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); }
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('is-open', !isOpen);
    });
    links.addEventListener('click', function (event) { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });
  }

})();
