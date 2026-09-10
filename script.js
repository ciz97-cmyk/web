
  // Mobilní menu toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMenu() {
    navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  }

  function closeMenu() {
    navToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  navToggle.addEventListener('click', toggleMenu);

  // Zavření menu po kliknutí na libovolný odkaz v menu
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Modal O společnosti
  const aboutModal = document.getElementById('aboutModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const btnOpenAboutModal = document.getElementById('btnOpenAboutModal');
  const navOspolecnosti = document.getElementById('navOspolecnosti');
  const modalToServices = document.getElementById('modalToServices');
  const modalToContact = document.getElementById('modalToContact');

  function openModal() {
    aboutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    aboutModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnOpenAboutModal) {
    btnOpenAboutModal.addEventListener('click', openModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Kliknutí mimo okno zavře modal
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
      closeModal();
    }
  });

  // Klávesa Escape zavře modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aboutModal.classList.contains('active')) {
      closeModal();
    }
  });

  if (modalToServices) {
    modalToServices.addEventListener('click', closeModal);
  }

  if (modalToContact) {
    modalToContact.addEventListener('click', closeModal);
  }

  // Tlačítka na 4 kartách předvyplní odpovídající službu ve formuláři a sjedou na formulář
  document.querySelectorAll('.card-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const service = btn.getAttribute('data-service');
      if (service) {
        if (service === 'prodej') {
          const r = document.getElementById('srv-prodej');
          if (r) r.checked = true;
        } else if (service === 'koupe') {
          const r = document.getElementById('srv-koupe');
          if (r) r.checked = true;
        } else if (service === 'garaze') {
          const r = document.getElementById('srv-garaze');
          if (r) r.checked = true;
        } else if (service === 'oceneni') {
          const r = document.getElementById('srv-oceneni');
          if (r) r.checked = true;
        }
      }
    });
  });

  // Odeslání formuláře
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Zobrazení potvrzení
      if (formSuccess) {
        formSuccess.classList.add('active');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset formuláře po úspěšném odeslání
      inquiryForm.reset();
      const defaultRadio = document.getElementById('srv-prodej');
      if (defaultRadio) defaultRadio.checked = true;
    });
  }

