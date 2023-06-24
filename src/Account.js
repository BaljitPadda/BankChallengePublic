import { Transaction } from "./Transaction.js"; // CHECK WITH ED

class Account {

    #balance = 0;

    transactions = [];

    deposit(sum, date) {
        if (sum > 0) {
            this.#balance += sum;
            let transaction = new Transaction(date ? date : new Date(), "Credit", sum);
            this.transactions.push(transaction);
        } else throw new Error("Deposit sum must be a positive number greater than 0. Deposit sum cannot be null, undefined, negative etc.");
    }


    withdraw(sum) {
        if (sum > 0) {
            this.#balance -= sum;
            let transaction = new Transaction(new Date(), "Debit", sum);
            this.transactions.push(transaction);
        } else throw new Error("Withdraw sum must be a positive number greater than 0. Withdraw sum cannot be null, undefined, negative etc.")
    }

    getBalance() {
        return this.#balance;
    }

}

export default Account;