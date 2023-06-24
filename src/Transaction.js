class Transaction {

    #date

    #typeOfTransaction

    #amount

    constructor(date, typeOfTransaction, amount) {

        if (typeOfTransaction != "Credit" && typeOfTransaction != "Debit") {
            throw new Error("Transactions can only be of type credit or debit.")
        }

        if (isNaN(amount) || amount <= 0) {
            throw new Error("Transaction amount must be a numeric value greater than 0")
        }

        this.#date = date;
        this.#typeOfTransaction = typeOfTransaction;
        this.#amount = amount;

    }

    getDate() {
        return this.#date;
    }

    getTypeOfTransaction() {
        return this.#typeOfTransaction;
    }

    getAmount() {
        return this.#amount;
    }


}

export { Transaction };