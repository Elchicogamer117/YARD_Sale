const menuEmail = document.querySelector(".navbarEmail");
const desktopMenu = document.querySelector(".desktopMenu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobileMenu");

const shoppingCardIcon = document.querySelector(".navbarShoppingCard");
const shoppingCardArrow = document.querySelector(".arrow");
const shoppingCardMenu = document.querySelector(".productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCardIcon.addEventListener("click", toggleCartMenu);
shoppingCardArrow.addEventListener("click", toggleCartMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCardMenu.classList.add("inactive");
}

function toggleCartMenu() {
  shoppingCardMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
}
