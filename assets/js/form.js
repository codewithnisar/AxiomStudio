/**
 * StackAura — Contact Form Validation & Scope Selector Controller
 */
window.initContactForm = function() {
  function setupPills(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const pills = container.querySelectorAll('.pill-option');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
      });
    });
  }

  setupPills('scopePills');
  setupPills('budgetPills');

  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';
    
    const selectedScope = document.querySelector('#scopePills .selected')?.getAttribute('data-value') || 'Web App';
    const selectedBudget = document.querySelector('#budgetPills .selected')?.getAttribute('data-value') || '$10k - $25k';

    if (!name || !email || !message) {
      if (typeof window.showToast === 'function') {
        window.showToast("Please complete all required fields.", "⚠️");
      }
      return;
    }

    // Standard email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (typeof window.showToast === 'function') {
        window.showToast("Please enter a valid email address.", "⚠️");
      }
      return;
    }

    if (typeof window.showToast === 'function') {
      window.showToast(`Thank you ${name}! Your ${selectedScope} project inquiry has been received.`, "✓");
    }
    contactForm.reset();
    
    // Reset selection pills to default states
    document.querySelectorAll('.pill-option').forEach(p => p.classList.remove('selected'));
    document.querySelector('#scopePills .pill-option')?.classList.add('selected');
    document.querySelector('#budgetPills .pill-option:nth-child(2)')?.classList.add('selected');
  });
};
