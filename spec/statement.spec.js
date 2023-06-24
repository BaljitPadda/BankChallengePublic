import { Statement } from "../src/Statement.js";
import { Transaction } from "../src/Transaction.js";

class MockAccount {

    transactions = []

}

describe("StatementPrinter Class Tests", () => {

    beforeEach(() => {
        mockAccount = new MockAccount();
    });

    let mockAccount;

    it("should be able to print a transaction as a row", () => {

        // Arrange
        mockAccount.transactions.push(new Transaction(new Date(2023, 5, 24), "Credit", 500));

        let expected = `date      || credit   || debit    || balance \n` +
            `6/24/2023 || 500.00   ||          || currentBalance \n`


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

        it("should display transactions made on different dates", () => {

            // Arrange
            mockAccount = new MockAccount();
            mockAccount.transactions.push(new Transaction(new Date(2023, 5, 18), "Credit", 500));
            mockAccount.transactions.push(new Transaction(new Date(2023, 5, 22), "Credit", 500));

            // Act
            let expected = `date      || credit   || debit    || balance \n` +
                `6/18/2023 || 500.00   ||          || currentBalance \n` +
                `6/22/2023 || 500.00   ||          || currentBalance \n`


            // Assert
            let actual = Statement.print(mockAccount);

            expect(actual).toEqual(expected)


        });


});

