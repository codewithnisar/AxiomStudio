/**
 * StackAura — UI & Interactions Component Controller
 */

// Toast Notification System
window.showToast = function(msg, icon = "✦") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Scroll Progress & Navigation Sticky Controller
window.initScrollProgress = function() {
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = progressPercent + '%';
    if (nav) nav.classList.toggle('stuck', scrollTop > 30);

    if (backToTop) {
      if (scrollTop > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// Mobile Navigation Drawer Controller
window.initMobileDrawer = function() {
  const hamb = document.getElementById('hamb');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerItems = document.querySelectorAll('.drawer-item');

  if (!mobileDrawer) return;

  function toggleDrawer(open) {
    mobileDrawer.classList.toggle('open', open);
    mobileDrawer.setAttribute('aria-hidden', !open);
    if (hamb) hamb.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamb) hamb.addEventListener('click', () => toggleDrawer(true));
  if (drawerClose) drawerClose.addEventListener('click', () => toggleDrawer(false));
  
  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) toggleDrawer(false);
  });

  drawerItems.forEach(item => {
    item.addEventListener('click', () => toggleDrawer(false));
  });

  // ESC Listener for Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
};

// 3D Stage Mouse Parallax Tilt
window.init3DStage = function() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stage = document.getElementById('stage');
  if (stage && !reducedMotion) {
    stage.addEventListener('mousemove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 10}deg)`;
    });
    stage.addEventListener('mouseleave', () => {
      stage.style.transform = '';
    });
  }
};

// Intersection Observer for Reveal Elements
window.initRevealObserver = function() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};
