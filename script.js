"use strict";

// console.log((document.querySelector(".message").textContent = "Start Gue😎😎😎"));

// document.querySelector(".message").textContent = "Correct Number! 😎";

document.querySelector(".number").textContent = "❖";
document.querySelector(".score").textContent = "20";

const secretNumber = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".number").textContent = secretNumber;

// selecting a button because a button triggers an event. the click event requires a second argument called eventHandler  to do something with the event and we pass in a function with its value
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  if (!guessNum) {
    document.querySelector(".message").textContent = "No number";
  } else if (guessNum === secretNumber) {
    document.querySelector(".message").textContent = "You WON!";
  } else if (guessNum > secretNumber) {
    document.querySelector(".message").textContent = "Too High";
  } else if (guessNum < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
  }
});
