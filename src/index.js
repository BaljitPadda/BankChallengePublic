import Account from "./Account.js";
import { Statement } from "./Statement.js";

let accountBP = new Account();
console.log(" ")
let startingBalance = accountBP.getBalance()
console.log("Starting balance: " + startingBalance)

accountBP.withdraw(500, new Date(2012, 0, 14));
accountBP.deposit(1000, new Date(2012, 0, 10));
accountBP.deposit(2000, new Date(2012, 0, 13));

let closingBalance = accountBP.getBalance();
console.log("Balance after transactions made: " + closingBalance)
console.log(" ")

console.log(Statement.print(accountBP));
console.log(" ")
console.log("Thank you for choosing to bank with BP banking!")
console.log(" ")






