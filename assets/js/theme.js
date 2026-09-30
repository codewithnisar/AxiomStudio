/**
 * Axiom Studio — Theme Accent Palette Switcher Controller
 */
window.initThemePicker = function() {
  const themeDots = document.querySelectorAll('.theme-dot');
  
  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      themeDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const color = dot.getAttribute('data-color');
      document.documentElement.style.setProperty('--accent', color);
      document.documentElement.style.setProperty('--lime', color);
      if (typeof window.showToast === 'function') {
        window.showToast(`Axiom accent color updated to ${color}`);
      }
    });
  });
};
