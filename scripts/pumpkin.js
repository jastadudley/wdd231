// date.js

const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  nav.classList.toggle("show");
});


//