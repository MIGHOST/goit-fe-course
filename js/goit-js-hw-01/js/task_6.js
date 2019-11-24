"use strict";
//task-6

let userInput;
let total = 0;

while (true) {
  userInput = +prompt('Input a ');

  if (userInput === null) {
    break;
  }

  if (userInput <= 0) {
    break;
  }

  total += userInput;
}

alert(`Amount = ${total}`);