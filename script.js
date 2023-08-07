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

// function recBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middleIndex = Math.floor(leftIndex + rightIndex / 2);
//   if (arr[middleIndex] === target) {
//     return middleIndex;
//   }
//   if (arr[middleIndex] > target) {
//     search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// recBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6);
