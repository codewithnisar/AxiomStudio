/**
 * StackAura — Contact Form Validation & Serverless Email Submission Controller
 */
window.initContactForm = function() {
  // Web3Forms Access Key Configuration
  // Get a free key instantly at https://web3forms.com (Zero backend code required!)
  // Paste your access key below to receive form submissions straight to your email.
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
      submitBtn.textContent = 'Sending Brief...';
    }

    try {
      // If Web3Forms access key is configured, post to Web3Forms API
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
        const response = await fetch('https://api.web3forms.com/submit', {
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
            subject: `New StackAura Inquiry from ${name}`
          })
        });

        const result = await response.json();
        if (result.success) {
          if (typeof window.showToast === 'function') {
            window.showToast(`Thank you ${name}! Your project inquiry has been sent.`, "✓");
          }
        } else {
          if (typeof window.showToast === 'function') {
            window.showToast(result.message || "Failed to send message.", "⚠️");
          }
        }
      } else {
        // Demonstration mode when key is placeholder
        await new Promise(resolve => setTimeout(resolve, 800));
        if (typeof window.showToast === 'function') {
          window.showToast(`Thank you ${name}! Your ${selectedScope} project inquiry has been received.`, "✓");
        }
      }

      contactForm.reset();
      
      // Reset selection pills to default states
      document.querySelectorAll('.pill-option').forEach(p => p.classList.remove('selected'));
      document.querySelector('#scopePills .pill-option')?.classList.add('selected');
      document.querySelector('#budgetPills .pill-option:nth-child(2)')?.classList.add('selected');

    } catch (err) {
      if (typeof window.showToast === 'function') {
        window.showToast("Connection error. Please try again or email hello@stackaura.studio", "⚠️");
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
};
