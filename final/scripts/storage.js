// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-platform]');
  const saved = localStorage.getItem('favPlatform');
  if (saved) applyPlatform(saved);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const plat = btn.dataset.platform;
      localStorage.setItem('favPlatform', plat);
      applyPlatform(plat);
    });
  });

  function applyPlatform(plat) {
    document.body.dataset.platform = plat;
    buttons.forEach(b => b.classList.toggle('selected', b.dataset.platform === plat));
  }
});
