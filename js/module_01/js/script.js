"use strict";

//Task 1
const name = "protectiveFieldGenerator";
let price = 1000;
let string = `${name} selected, unit price ${price} credits`;

console.log(string);

price = 2000;
let string1 = `${name} selected, unit price ${price} credits`;
console.log(string1);

//Task 2
let type;
const total = 100;
const ordered = 20;
type =
  total >= ordered ?
  "The order is placed, the manager will contact you!" :
  "Not enough goods in stock!";
console.log(type);

//Task 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt("Enter password", ""); { 

  if (message < prompt) {
    message == "Canceled by user!";
  };

  if (message === ADMIN_PASSWORD) {

    message == 'Welcome';

  };

  if (message != ADMIN_PASSWORD) {
    message == 'Access denied, wrong password!';
  }
}

alert(message);