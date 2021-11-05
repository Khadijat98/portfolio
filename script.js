
const navHamburgerMenu = document.getElementById('navHamburgerMenu');
const navLinkContainer = document.getElementById('nav__link-container');

navHamburgerMenu.addEventListener("click", () => {
  navLinkContainer.classList.toggle("show");
});