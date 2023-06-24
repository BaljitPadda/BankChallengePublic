
class Statement {

    static print(account) {

        let debitColumn = ""
        let creditColumn = ""
        let row = "";
        let header = "date      || credit   || debit    || balance ";
        let currentBalance = "currentBalance";


        account.transactions.forEach(transaction => {
            if (transaction.getTypeOfTransaction() == "Credit") {
                creditColumn = Statement.padString(`${transaction.getAmount().toFixed(2)}`)
                debitColumn = Statement.padString(" ")
            }
            if (transaction.getTypeOfTransaction() == "Debit") {
                debitColumn = Statement.padString(`${transaction.getAmount().toFixed(2)}`)
                creditColumn = Statement.padString(" ")
            }
            row += `${transaction.getDate().toLocaleDateString()} || ${creditColumn} || ${debitColumn} || ${currentBalance} \n`;

        });

        return header + `\n` + row

    }

    static padString(string) {
        return string.padEnd(8)
    }



}
export { Statement };