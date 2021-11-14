const burger = document.querySelector(".burger");
const list = document.querySelector(".list");
const navBar = document.querySelector("nav");
const toTop = document.querySelector(".to-top");

burger.addEventListener("click", () => {
  list.classList.toggle("show");
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    navBar.classList.add("active");
    toTop.classList.add("active");
  } else {
    navBar.classList.remove("active");
    toTop.classList.remove("active");
  }
});
