import Account from "./Account.js";
import { Statement } from "./Statement.js";

let accountBP = new Account();
let startingBalance = accountBP.getBalance()
console.log(startingBalance)

accountBP.withdraw(500, new Date(2012, 0, 14));
accountBP.deposit(1000, new Date(2012, 0, 10));
accountBP.deposit(2000, new Date(2012, 0, 13));



console.log(accountBP.getBalance());
console.log(" ")


console.log(Statement.print(accountBP));
console.log(" ")






