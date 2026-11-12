// Seekphase Studios — accessible navigation, lightweight enhancements only.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-navigation');
  const closeMenu = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }
  // Native details handles category navigation without JS; this only improves dismissal.
  const projectsMenu = document.querySelector('.nav-projects');
  if (projectsMenu) {
    document.addEventListener('click', event => {
      if (!projectsMenu.contains(event.target)) projectsMenu.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && projectsMenu.open) {
        projectsMenu.open = false;
        projectsMenu.querySelector('summary')?.focus();
      }
    });
    projectsMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { projectsMenu.open = false; });
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08, rootMargin: '0px 0px 30px 0px'});
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add('is-visible'));
  }
})();
