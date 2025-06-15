// Get saved or default console (lowercase to match JSON)
let selectedConsole = localStorage.getItem('console') || 'pc';

// Attach click logic to console buttons after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.console-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.console-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      selectedConsole = btn.dataset.console.toLowerCase();
      localStorage.setItem('console', selectedConsole);
      renderGames(gameList);
    });
  });
});

// Store the games list for re-rendering
let gameList = [];

// Render cards based on selected console
function renderGames(games) {
  const container = document.getElementById('game-container');
  container.innerHTML = '';

  games.forEach(g => {
    const gameLink = g.links?.[selectedConsole];
    if (!gameLink || gameLink.includes('no-results')) return;

    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="game-images">
        <img src="${g.imageGameplay}" loading="lazy" alt="${g.title} gameplay">
        <img src="${g.imageCover}" loading="lazy" alt="${g.title} cover art">
      </div>
      <div class="game-info">
        <h3>${g.title}</h3>
        <p><strong>Why I Love It:</strong> ${g.why}</p>
        <p><strong>Best For:</strong> ${g.bestFor}</p>
        <a href="${gameLink}" class="cta-button" target="_blank">
          Check it out on ${capitalizeConsole(selectedConsole)}
        </a>
      </div>`;
    container.appendChild(card);
  });
}

// Helper: capitalize console name
function capitalizeConsole(str) {
  if (str.toLowerCase() === 'ps') return 'PlayStation';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Fetch games JSON once & render
fetch('games.json')
  .then(res => res.json())
  .then(games => {
    gameList = games;
    renderGames(games);
  })
  .catch(err => console.error('Error loading games:', err));
