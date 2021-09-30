// Meditation breathing exercise

const action = document.getElementById("action");
const inhale = document.getElementsByClassName(".Inhale");

setInterval(function () {
  action.innerHTML = "Exhale";
}, 5000);
  setInterval(function () {
  action.innerHTML = "Inhale";
  }, 10000);
