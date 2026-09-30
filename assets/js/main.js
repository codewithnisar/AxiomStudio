/**
 * Axiom Studio — Main Application Entry Point
 */
document.body.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.initScrollProgress === 'function') window.initScrollProgress();
  if (typeof window.initMobileDrawer === 'function') window.initMobileDrawer();
  if (typeof window.init3DStage === 'function') window.init3DStage();
  if (typeof window.initRevealObserver === 'function') window.initRevealObserver();
  if (typeof window.initThemePicker === 'function') window.initThemePicker();
  if (typeof window.initModal === 'function') window.initModal();
  if (typeof window.initContactForm === 'function') window.initContactForm();
});
