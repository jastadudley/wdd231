// fFeedback form on Tios page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value;
    const message = form.message.value;
    document.getElementById("feedback").innerHTML = `
      <h2>Thanks for the cozy love, ${name}! 💖</h2>
      <p>Your message: "${message}"</p>`;
  });
});
