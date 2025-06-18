const url = "data/data.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    displayCards(data, "entertainment", "#entertainment-cards");
    displayCards(data, "dining", "#dining-cards");
  });

function displayCards(data, type, sectionSelector) {
  const section = document.querySelector(sectionSelector);
  const filtered = data.filter(item => item.type === type);

  filtered.forEach(item => {
    const card = document.createElement("section");
    card.classList.add("card");

    // Add HTML content using grid-area class names
    card.innerHTML = `
      <img src="${item.image}" alt="Photo of ${item.name}" loading="lazy" class="card-img" />
      <h3 class="card-name">${item.name}</h3>
      <p class="card-description">${item.description}</p>
      <address class="card-address">${item.address}</address>
    `;

    section.appendChild(card);
  });
}
