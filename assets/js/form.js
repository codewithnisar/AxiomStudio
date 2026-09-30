/**
 * Axiom Studio — Contact Form Controller (Direct WhatsApp Integration)
 */
window.initContactForm = function() {
  const WHATSAPP_NUMBER = "923350991548"; // International format for 03350991548
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

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

  const submitBtn = contactForm.querySelector('.submit-btn');

  contactForm.addEventListener('submit', async (e) => {
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

    // Set submit button loading state
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Project Brief ↗';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Opening WhatsApp...';
    }

    try {
      // Formatted WhatsApp Message
      const whatsappText = `*New Project Inquiry — Axiom Studio*\n\n` +
        `👤 *Name:* ${name}\n` +
        `✉️ *Email:* ${email}\n` +
        `🚀 *Scope:* ${selectedScope}\n` +
        `💰 *Budget:* ${selectedBudget}\n\n` +
        `📝 *Details:* ${message}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

      // Optional background submit to Web3Forms if key is provided
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: name,
            email: email,
            scope: selectedScope,
            budget: selectedBudget,
            message: message,
            subject: `New Axiom Studio Inquiry from ${name}`
          })
        }).catch(() => {});
      }

      if (typeof window.showToast === 'function') {
        window.showToast(`Opening WhatsApp chat for 03350991548...`, "✓");
      }

      // Open WhatsApp chat directly with pre-filled message
      window.open(whatsappUrl, '_blank');

      contactForm.reset();
      
      // Reset selection pills to default states
      document.querySelectorAll('.pill-option').forEach(p => p.classList.remove('selected'));
      document.querySelector('#scopePills .pill-option')?.classList.add('selected');
      document.querySelector('#budgetPills .pill-option:nth-child(2)')?.classList.add('selected');

    } catch (err) {
      if (typeof window.showToast === 'function') {
        window.showToast("Connection error. Please try again or email nissarralee11255@gmail.com", "⚠️");
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
};
