const drop_down = document.getElementsByClassName("drop-down")[0];
const down = document.getElementsByClassName("down")[0];

drop_down.addEventListener("click", () => {
  down.classList.toggle("active");
});