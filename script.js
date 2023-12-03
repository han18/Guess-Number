"use strict";

// console.log((document.querySelector(".message").textContent = "Start Gue😎😎😎"));

// document.querySelector(".message").textContent = "Correct Number! 😎";

document.querySelector(".number").textContent = "❖";
document.querySelector(".score").textContent = "20";

// since guess is a class of an input field we need the value
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// selecting a button because a button triggers an event. the click event requires a second argument called eventHandler  to do something with the event and we pass in a function with its value
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  document.querySelector(".message").textContent = "Correct Number! 😎";
});
