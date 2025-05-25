const url = 'members.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  try {
    const response = await fetch('members.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("Fetched member data:", data);
    displayMembers(data);
  } catch (error) {
    console.error("Could not load members.json:", error);
  }
}

function displayMembers(members) {
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
    img.src = `images/${member.image}`;
    img.alt = `Logo for ${member.name}`;
    img.loading = 'lazy';

    content.appendChild(h3);
    content.appendChild(pEmail);
    content.appendChild(pPhone);
    content.appendChild(pURL);
    
    card.appendChild(img);
    card.appendChild(content);

    cards.appendChild(card);
  });
}

getMembers();



/*Toggle logic*/
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



/*hamburger menu*/
const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});