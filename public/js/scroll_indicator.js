document.addEventListener('DOMContentLoaded', () => {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) {
    return;
  }

  const updateVisibility = () => {
    const shouldHide = window.scrollY >= 100;
    indicator.classList.toggle('hidden', shouldHide);
  };

  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
});

