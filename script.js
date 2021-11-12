
const navHamburgerMenu = document.querySelector(".nav__hamburger-menu");
const navLinkContainer = document.querySelector(".nav__link-container");

navHamburgerMenu.addEventListener("click", () => {
  navLinkContainer.classList.toggle("show");
});


const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const navLogo = document.querySelector(".nav__logo");
const navHamburgerMenuBars = document.querySelector(".nav__hamburger-menu-bars")

window.addEventListener("scroll", () => {
  if (window.scrollY > 980) {
    nav.classList.add("scroll");
    navLinks.forEach((navLink) => {
      navLink.classList.add("scroll");
    })
    navLogo.classList.add("scroll");
    navHamburgerMenuBars.classList.add("scroll");
  } 
  else {
    nav.classList.remove("scroll");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("scroll");
    })
    navLogo.classList.remove("scroll");
    navHamburgerMenuBars.classList.remove("scroll");
  }
});