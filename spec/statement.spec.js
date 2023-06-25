import { Statement } from "../src/Statement.js";

class MockAccount {
    transactions = []
}

class MockTransaction {
    getDate = () => { }

    getTypeOfTransaction = () => { }

    getAmount = () => { }
}

describe("StatementPrinter Class Tests", () => {

    beforeEach(() => {
        mockAccount = new MockAccount();
    });

    let mockAccount;

    it("should be able to print a transaction as a row", () => {

        // Arrange
        let transaction = new MockTransaction();
        spyOn(transaction, "getDate").and.returnValue(new Date(2023, 5, 24))
        spyOn(transaction, "getTypeOfTransaction").and.returnValue("Credit")
        spyOn(transaction, "getAmount").and.returnValue(500)

        mockAccount.transactions.push(transaction);

        let expected = `date       || credit   || debit    || balance \n` +
            `24/06/2023 || 500.00   ||          || 500 \n`


        // Act
        let actual = Statement.print(mockAccount);

        // Assert
        expect(actual).toBe(expected);

    }),


        it("should have a print method that takes in an account object", () => {

            // Arrange
            mockAccount = new MockAccount();
            // Act
            Statement.print(mockAccount);

            // Assert
            expect(function () {
                Statement.print(mockAccount);
            }).toBeDefined();

        }),


        it("should be able to display transactions made on different dates", () => {

            // Arrange
            mockAccount = new MockAccount();
            let transaction1 = new MockTransaction();

            spyOn(transaction1, "getDate").and.returnValue(new Date(2023, 5, 18))
            spyOn(transaction1, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction1, "getAmount").and.returnValue(500)

            let transaction2 = new MockTransaction();

            spyOn(transaction2, "getDate").and.returnValue(new Date(2023, 5, 22))
            spyOn(transaction2, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction2, "getAmount").and.returnValue(500)

            mockAccount.transactions.push(transaction1);
            mockAccount.transactions.push(transaction2);

            // Act
            let expected =
                `date       || credit   || debit    || balance \n` +
                `22/06/2023 || 500.00   ||          || 1000 \n` +
                `18/06/2023 || 500.00   ||          || 500 \n`


            // Assert
            let actual = Statement.print(mockAccount);
            expect(actual).toEqual(expected)

        }),


        it("should order transactions in reverse chronological order", () => {

            // Arrange
            mockAccount = new MockAccount();

            let transaction1 = new MockTransaction();

            spyOn(transaction1, "getDate").and.returnValue(new Date(2023, 4, 27))
            spyOn(transaction1, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction1, "getAmount").and.returnValue(500)

            let transaction2 = new MockTransaction();

            spyOn(transaction2, "getDate").and.returnValue(new Date(2023, 5, 1))
            spyOn(transaction2, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction2, "getAmount").and.returnValue(500)

            let transaction3 = new MockTransaction();

            spyOn(transaction3, "getDate").and.returnValue(new Date(2023, 5, 3))
            spyOn(transaction3, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction3, "getAmount").and.returnValue(500)

            let transaction4 = new MockTransaction();

            spyOn(transaction4, "getDate").and.returnValue(new Date(2023, 5, 10))
            spyOn(transaction4, "getTypeOfTransaction").and.returnValue("Credit")
            spyOn(transaction4, "getAmount").and.returnValue(500)

            mockAccount.transactions.push(transaction1);
            mockAccount.transactions.push(transaction2);
            mockAccount.transactions.push(transaction3);
            mockAccount.transactions.push(transaction4);

            // Act
            let expected =
                `date       || credit   || debit    || balance \n` +
                `10/06/2023 || 500.00   ||          || 2000 \n` +
                `03/06/2023 || 500.00   ||          || 1500 \n` +
                `01/06/2023 || 500.00   ||          || 1000 \n` +
                `27/05/2023 || 500.00   ||          || 500 \n`


            // Assert
            let actual = Statement.print(mockAccount);

            expect(actual).toEqual(expected);


        });


});