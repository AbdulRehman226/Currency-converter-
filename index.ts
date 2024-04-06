#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  IND: 74.57,
  PKR: 280,
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR"],
  },
  {
    name: "to",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR"],
  },
  {
    name: "amount",
    message: "Enter you amount",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
