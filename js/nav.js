/* ============================================================
   AnaYurt — Navigation JS (shared across all pages)
   ============================================================ */

(function () {
  'use strict';

  // ── Hamburger / mobile nav ──────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', function () {
      const isOpen = navOverlay.classList.contains('open');
      navOverlay.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close on overlay link click
    navOverlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navOverlay.classList.contains('open')) {
        navOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  // ── Mark active nav link ────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(function (link) {
    const linkPath = link.getAttribute('href') || '';
    if (linkPath === currentPath ||
        (currentPath === '' && linkPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

})();