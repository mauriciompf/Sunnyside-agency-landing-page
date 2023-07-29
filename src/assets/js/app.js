const menu = document.querySelector("#menu");
const button = document.querySelector("#menu-btn");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
