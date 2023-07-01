import { Statement } from "../src/Statement.js";
import chalk from 'chalk';

class MockAccount {
    getTransactions = () => { }
}

class MockTransaction {
    getDate = () => { }
    getTypeOfTransaction = () => { }
    getAmount = () => { }
}

describe("StatementPrinter Class Tests", () => {

    beforeEach(() => {
        mockAccount = new MockAccount();
        transactions = [];
    });

    let mockAccount;
    let transactions;

    it("should be able to print a transaction as a row", () => {

        // Arrange
        let transaction = new MockTransaction();
        spyOn(transaction, "getDate").and.returnValue(new Date(2023, 5, 24))
        spyOn(transaction, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction, "getAmount").and.returnValue(500)
        transactions.push(transaction)

        spyOn(mockAccount, "getTransactions").and.returnValue(transactions);

        let expected = `date       || credit  || debit  || balance \n` +
            `24/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("500.00")}`

        // Act
        let actual = Statement.print(mockAccount);

        // Assert
        expect(actual).toEqual(expected);
    });


    it("should have a print method that takes in an account object", () => {

        // Arrange
        // Act
        //spyOn(mockAccount, "getTransactions").and.returnValue(transactions);
        //Statement.print(mockAccount);

        // Assert
        expect(function () {
            Statement.print(mockAccount);
        }).toBeDefined();
    });


    it("should be able to display transactions made on different dates", () => {

        // Arrange
        let transaction1 = new MockTransaction();
        spyOn(transaction1, "getDate").and.returnValue(new Date(2023, 5, 18))
        spyOn(transaction1, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction1, "getAmount").and.returnValue(500)
        transactions.push(transaction1);

        let transaction2 = new MockTransaction();
        spyOn(transaction2, "getDate").and.returnValue(new Date(2023, 5, 22))
        spyOn(transaction2, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction2, "getAmount").and.returnValue(500)
        transactions.push(transaction2);

        spyOn(mockAccount, "getTransactions").and.returnValue(transactions);

        // Act
        let expected =
            `date       || credit  || debit  || balance \n` +
            `22/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("1000.00")}\n` +
            `18/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("500.00")}`

        // Assert
        let actual = Statement.print(mockAccount);
        expect(actual).toEqual(expected)
    });


    it("should order transactions in reverse chronological order (newest first)", () => {

        // Arrange
        let transaction1 = new MockTransaction();
        spyOn(transaction1, "getDate").and.returnValue(new Date(2023, 4, 27))
        spyOn(transaction1, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction1, "getAmount").and.returnValue(500)
        transactions.push(transaction1);

        let transaction2 = new MockTransaction();
        spyOn(transaction2, "getDate").and.returnValue(new Date(2023, 5, 1))
        spyOn(transaction2, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction2, "getAmount").and.returnValue(500)
        transactions.push(transaction2);

        let transaction3 = new MockTransaction();
        spyOn(transaction3, "getDate").and.returnValue(new Date(2023, 5, 3))
        spyOn(transaction3, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction3, "getAmount").and.returnValue(500)
        transactions.push(transaction3);

        let transaction4 = new MockTransaction();
        spyOn(transaction4, "getDate").and.returnValue(new Date(2023, 5, 10))
        spyOn(transaction4, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction4, "getAmount").and.returnValue(500)
        transactions.push(transaction4);

        spyOn(mockAccount, "getTransactions").and.returnValue(transactions);

        // Act
        let expected =
            `date       || credit  || debit  || balance \n` +
            `10/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("2000.00")}\n` +
            `03/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("1500.00")}\n` +
            `01/06/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("1000.00")}\n` +
            `27/05/2023 || ${chalk.green("500.00")} ||        || ${chalk.green("500.00")}`

        // Assert
        let actual = Statement.print(mockAccount);

        expect(actual).toEqual(expected);
    });

});