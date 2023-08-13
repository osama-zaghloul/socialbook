var modeBtn = document.getElementById("dark-btn");
var settingsMenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}
function modeBtnToggle() {
  modeBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("mode") == "light") {
    localStorage.setItem("mode", "dark");
  } else if (localStorage.getItem("mode") == "dark") {
    localStorage.setItem("mode", "light");
  }
}

if (localStorage.getItem("mode") == "dark") {
  document.body.classList.add("dark-theme");
  modeBtn.classList.add("dark-btn-on");
} else if (localStorage.getItem("mode") == "light") {
  document.body.classList.remove("dark-theme");
  modeBtn.classList.remove("dark-btn-on");
} else {
  localStorage.setItem("mode", "light");
}
