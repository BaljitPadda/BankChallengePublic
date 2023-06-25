
class Statement {

    static print(account) {

        let debitColumn = ""
        let creditColumn = ""
        let row = [""];
        let header = "date       || credit   || debit    || balance ";
        let currentBalance = 0;

        let sortedTransactions = account.transactions;

        // sorts dates from oldest to newest, starting balance 0.
        sortedTransactions.sort((transaction1, transaction2) => transaction1.getDate() - transaction2.getDate());


        sortedTransactions.forEach(transaction => {
            if (transaction.getTypeOfTransaction() == "Credit") {
                creditColumn = Statement.padString(`${transaction.getAmount().toFixed(2)}`)
                debitColumn = Statement.padString(" ")
                currentBalance += transaction.getAmount()
            }
            if (transaction.getTypeOfTransaction() == "Debit") {
                debitColumn = Statement.padString(`${transaction.getAmount().toFixed(2)}`)
                creditColumn = Statement.padString(" ")
                currentBalance -= transaction.getAmount()
            }

            row.push(`${transaction.getDate().toLocaleDateString("en-GB")} || ${creditColumn} || ${debitColumn} || ${currentBalance} `);

        });

        // using reverse() as transactions need to be printed in reverse chronological order, newest to oldest.
        // using join() to make row (which is an array of strings) into one big string with new lines.
        return header + `\n` + row.reverse().join(`\n`);

    }

    static padString(string) {
        return string.padEnd(8)
    }




}
export { Statement };