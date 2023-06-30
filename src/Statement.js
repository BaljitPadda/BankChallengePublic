import chalk from "chalk";

class Statement {

    static header = "date       || credit  || debit  || balance ";

    static print(account) {
        let sortedTransactions = Statement.sortTransactions(account)
        let rows = [];
        let currentBalance = 0;

        sortedTransactions.forEach(transaction => {
            currentBalance = Statement.calculateCurrentBalance(transaction, currentBalance)
            rows.push(Statement.createRow(transaction, currentBalance))
        })
        return Statement.header + `\n` + rows.reverse().join(`\n`);
    }

    // sorts transactions by date, from oldest to newest (starting balance 0).
    static sortTransactions(account) {
        let sortedTransactions = account.getTransactions();
        sortedTransactions.sort((transaction1, transaction2) => transaction1.getDate() - transaction2.getDate())
        return sortedTransactions
    }

    // calculates the current balance after a transaction is made by the transaction amount.
    // handles the type check of transaction.
    static calculateCurrentBalance(transaction, currentBalance) {
        if (transaction.getTypeOfTransaction() == "Credit") {
            return currentBalance += transaction.getAmount()
        }
        if (transaction.getTypeOfTransaction() == "Debit") {
            return currentBalance -= transaction.getAmount()
        }
    }

    static createRow(transaction, currentBalance) {
        if (transaction.getTypeOfTransaction() == "Credit") {
            return Statement.createCreditRow(transaction, currentBalance)
        } if (transaction.getTypeOfTransaction() == "Debit") {
            return Statement.createDebitRow(transaction, currentBalance)
        }
    }

    static createCreditRow(transaction, currentBalance) {
        let amount = `${transaction.getAmount().toFixed(2)}`
        let creditColumn = Statement.padString(chalk.green(amount), 7)
        let debitColumn = Statement.padString(" ", 6)
        return `${transaction.getDate().toLocaleDateString("en-GB")} || ${creditColumn} || ${debitColumn} || ${currentBalance < 0 ? chalk.red(currentBalance.toFixed(2)) : chalk.green(currentBalance.toFixed(2))}`;
    }

    static createDebitRow(transaction, currentBalance) {
        let amount = `${transaction.getAmount().toFixed(2)}`
        let debitColumn = Statement.padString(chalk.red(amount), 6)
        let creditColumn = Statement.padString(" ", 7)
        return `${transaction.getDate().toLocaleDateString("en-GB")} || ${creditColumn} || ${debitColumn} || ${currentBalance < 0 ? chalk.red(currentBalance.toFixed(2)) : chalk.green(currentBalance.toFixed(2))}`;
    }

    static padString(string, number) {
        return string.padEnd(number)
    }

};

export { Statement };