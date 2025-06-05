const cards = document.querySelector('.cards');

if (cards) {
  async function getMembers() {
    try {
      const response = await fetch('chamber/members.json');
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
}


/* Toggle logic */
if (cards) {
  const gridBtn = document.getElementById('gridBtn');
  const listBtn = document.getElementById('listBtn');

  if (gridBtn && listBtn) {
    gridBtn.addEventListener('click', () => {
      cards.classList.remove('list');
      cards.classList.add('grid');
    });

    listBtn.addEventListener('click', () => {
      cards.classList.remove('grid');
      cards.classList.add('list');
    });
  }
}

/* Hamburger menu */
const thisMenuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav');

if (thisMenuButton) {
  thisMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}


