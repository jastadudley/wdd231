// date.js
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

//Hamburger Menu
const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");