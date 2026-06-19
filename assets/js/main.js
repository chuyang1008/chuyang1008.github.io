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

})();
