"use strict";

// console.log((document.querySelector(".message").textContent = "Start Gue😎😎😎"));

// document.querySelector(".message").textContent = "Correct Number! 😎";

document.querySelector(".number").textContent = "❖";
document.querySelector(".score").textContent = "20";

const secretNumber = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".number").textContent = secretNumber;

// creating a variable decrease the number of times a user plays
let scoreCheck = 5;

// selecting a button because a button triggers an event. the click event requires a second argument called eventHandler  to do something with the event and we pass in a function with its value
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  if (!guessNum) {
    document.querySelector(".message").textContent = "No number";
  } else if (guessNum === secretNumber) {
    document.querySelector(".message").textContent = "You WON!";
  } else if (guessNum > secretNumber) {
    if (scoreCheck > 0) {
      document.querySelector(".message").textContent = "Too High";
      scoreCheck--;
      document.querySelector(".score").textContent = scoreCheck;
    } else {
      document.querySelector(".message").textContent = "YOU LOST!";
    }
  } else if (guessNum < secretNumber) {
    if (scoreCheck > 0) {
      document.querySelector(".message").textContent = "Too Low!";
      scoreCheck--;
      document.querySelector(".score").textContent = scoreCheck;
    } else {
      document.querySelector(".message").textContent = "YOU LOST!";
    }
  }
});

// my own code
