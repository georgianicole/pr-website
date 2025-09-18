// Auto update year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple lightbox for portfolio
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const tiles = document.querySelectorAll('.tile img');

    tiles.forEach(img => {
      img.addEventListener('click', () => {
        const full = img.getAttribute('data-full') || img.src;
        lightboxImg.src = full;
        lightbox.classList.add('open');
        lightbox.removeAttribute('hidden');
      });
    });

    function closeLightbox(){
      lightbox.classList.remove('open');
      lightbox.setAttribute('hidden', '');
      lightboxImg.removeAttribute('src');
    }

    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
