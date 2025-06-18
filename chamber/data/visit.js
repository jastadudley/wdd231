const messageElement = document.querySelector("#visit-message");
const today = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisitDate"));

if (!lastVisit) {
  messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const msBetweenVisits = today - lastVisit;
  const daysBetween = Math.floor(msBetweenVisits / (1000 * 60 * 60 * 24));

  if (daysBetween < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
  } else {
    messageElement.textContent = `You last visited ${daysBetween} day${daysBetween > 1 ? "s" : ""} ago.`;
  }
}

localStorage.setItem("lastVisitDate", today);
