const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu-nav");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show-menu");
  body.classList.toggle("overflow");
});
