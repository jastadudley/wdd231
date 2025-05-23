const url = 'members.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');
    
    const h3 = document.createElement('h3');
    h3.textContent = member.name;

    const pTagline = document.createElement('p');
    pTagline.textContent = member.tagline;

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

    card.appendChild(h3);
    card.appendChild(pTagline);
    card.appendChild(img);
    card.appendChild(pEmail);
    card.appendChild(pPhone);
    card.appendChild(pURL);

    cards.appendChild(card);
  });
}

getMembers();