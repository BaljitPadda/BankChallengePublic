import chalk from "chalk";

class Statement {

    static print(account) {

        let debitColumn = ""
        let creditColumn = ""
        let row = [""];
        let header = "date       || credit  || debit  || balance ";
        let currentBalance = 0;


        let sortedTransactions = account.getTransactions();

        // sorts dates from oldest to newest, starting balance 0.
        sortedTransactions.sort((transaction1, transaction2) => transaction1.getDate() - transaction2.getDate());

        sortedTransactions.forEach(transaction => {

            let amount = `${transaction.getAmount().toFixed(2)}`

            if (transaction.getTypeOfTransaction() == "Credit") {
                creditColumn = Statement.padString(chalk.green(amount), 7)
                debitColumn = Statement.padString(" ", 6)
                currentBalance += transaction.getAmount()
            }
            if (transaction.getTypeOfTransaction() == "Debit") {
                debitColumn = Statement.padString(chalk.red(amount), 6)
                creditColumn = Statement.padString(" ", 7)
                currentBalance -= transaction.getAmount()
            }

            row.push(`${transaction.getDate().toLocaleDateString("en-GB")} || ${creditColumn} || ${debitColumn} || ${currentBalance} `);

        });

        // using reverse() as transactions need to be printed in reverse chronological order, newest to oldest.
        // using join() to make row (which is an array of strings) into one big string with new lines.
        return header + `\n` + row.reverse().join(`\n`);

    }

    static padString(string, number) {
        return string.padEnd(number)
    }


}
export { Statement };

//`${Statement.padString("date")} || ${Statement.padString("credit")} || ${Statement.padString("debit")} || ${Statement.padString("balance")}`;