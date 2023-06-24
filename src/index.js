import Account from "./Account.js";
import { Statement } from "./Statement.js";

let accountBP = new Account();

accountBP.deposit(1000)
accountBP.deposit(2000);
accountBP.withdraw(500);
accountBP.deposit(100, new Date(2012, 0, 10));

console.log(accountBP.getBalance());
console.log(" ")


console.log(Statement.print(accountBP));

