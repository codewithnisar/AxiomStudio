/**
 * Axiom Studio — Case Study Modal Dialog Manager
 */
window.initModal = function() {
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPreview = document.getElementById('modalPreview');
  const modalTech = document.getElementById('modalTech');
  const modalBody = document.getElementById('modalBody');

  if (!projectModal) return;

  function openProjectModal(key) {
    const data = window.PROJECTS_DATA ? window.PROJECTS_DATA[key] : null;
    if (!data) return;

    if (modalTag) modalTag.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalPreview) {
      modalPreview.style.background = data.previewBg;
      modalPreview.innerHTML = `<span>${data.title}</span>`;
    }
    
    if (modalTech) {
      modalTech.innerHTML = data.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');
    }
    if (modalBody) modalBody.innerHTML = data.body;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.card[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      openProjectModal(key);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card.getAttribute('data-project'));
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);
  
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // ESC Listener for Modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });
};
