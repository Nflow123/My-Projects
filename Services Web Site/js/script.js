let headerMenu = document.getElementById("headerMenu");
let navLinks = document.querySelector(".header .container .links");
let closeSquare = document.getElementById("closeSquare");

headerMenu.addEventListener("click", (e) => {
  navLinks.classList.add("mobile-menu-open");
});
closeSquare.addEventListener("click", (e) => {
  navLinks.classList.remove("mobile-menu-open");
});
