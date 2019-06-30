const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const CLICK_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICK_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
