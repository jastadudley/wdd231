// prophets.js

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cardsContainer = document.querySelector('.cards');

async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching prophet data:', error);
  }
}

function displayProphets(prophets) {
  prophets.forEach((prophet) => {

    const card = document.createElement('section');
    const name = document.createElement('h2');
    const birthdate = document.createElement('p');
    const birthplace = document.createElement('p');
    const portrait = document.createElement('img');

    name.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cardsContainer.appendChild(card);
  });
}

getProphetData();
