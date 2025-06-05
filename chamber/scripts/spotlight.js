// === Chamber featured businesses ===
document.addEventListener('DOMContentLoaded', () => {
    const spotlightContainer = document.querySelector('.spotlight-container');
  
    async function loadBusinesses() {
      try {
        const response = await fetch('members.json');
        const businesses = await response.json();
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
  });
  
  