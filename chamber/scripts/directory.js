const url = 'members.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Could not load members.json:", error);
  }
}

function displayMembers(members) {
  const fragment = document.createDocumentFragment(); 

  members.forEach(member => {
    const card = document.createElement('section');
    const content = document.createElement('div');

    const h3 = document.createElement('h3');
    h3.textContent = member.name;

    const pEmail = document.createElement('p');
    pEmail.innerHTML = `<strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a>`;

    const pPhone = document.createElement('p');
    pPhone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

    const pURL = document.createElement('p');
    pURL.innerHTML = `<strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a>`;

    const img = document.createElement('img');
    Object.assign(img, {
      src: `images/${member.image}`,
      alt: `Logo for ${member.name}`,
      loading: 'lazy',
      width: 220,
      height: 100
    });

    content.append(h3, pEmail, pPhone, pURL);
    card.append(img, content);
    fragment.appendChild(card);
  });

  cards.appendChild(fragment);
}

getMembers();

/* Toggle logic */
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', () => {
  cards.classList.remove('list');
  cards.classList.add('grid');
});

listBtn.addEventListener('click', () => {
  cards.classList.remove('grid');
  cards.classList.add('list');
});

/* Hamburger menu */
const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});






// === Chamber featured businesses ===
const spotlightContainer = document.querySelector('.spotlight-container');

async function loadBusinesses() {
  try {
    const response = await fetch('../members.json');
    const businesses = await response.json();
    console.log("📦 Loading featured businesses...");
    console.log("Data fetched ✅", businesses);

    const qualified = businesses.filter(b =>
      b.membership === 'Gold' || b.membership === 'Silver'
    );

    const randomBusinesses = qualified
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    if (randomBusinesses.length === 0) {
      console.warn("No featured businesses selected. Check filter or data.");
    }

    randomBusinesses.forEach(biz => {
      const card = document.createElement('div');
      card.classList.add('spotlight');
      card.innerHTML = `
        <h3>${biz.name}</h3>
        <img src="images/${biz.image}" alt="${biz.name} logo" loading="lazy">
        <p>${biz.address}</p>
        <p><a href="${biz.website}" target="_blank">${biz.website}</a></p>
        <p><strong>${biz.membership} Member</strong></p>
      `;
      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading businesses:", error);
  }
}

loadBusinesses();
