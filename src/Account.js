class Account {

    #balance = 0;

    deposit(sum) {
        this.#balance += sum;
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;