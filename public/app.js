const burguer = document.getElementById("burguer");
const menu = document.getElementById("menu");

burguer.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    menu.classList.add("justify-between");
  } else {
    menu.classList.add("hidden");
  }
});
