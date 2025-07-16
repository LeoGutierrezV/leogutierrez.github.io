    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if(mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        menuOverlay.classList.remove('hidden');
      });
    }

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
      menuOverlay.classList.remove('hidden');
    });

    closeMenuButton.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      menuOverlay.classList.add('hidden');
    });

    menuOverlay.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
      menuOverlay.classList.add('hidden');
    });

    const searchButton = document.getElementById('search-button');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const closeSearchButton = document.getElementById('close-search');
    const searchModal = document.getElementById('search-modal');

    searchButton.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
    });

    mobileSearchButton.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
    });

    closeSearchButton.addEventListener('click', () => {
      searchModal.classList.add('hidden');
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.add('hidden');
      }
    });