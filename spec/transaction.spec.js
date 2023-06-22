import { Transaction } from "../src/Transaction.js";

describe("Transaction Class Tests", () => {


    it("should be able to create a credit transaction with a date, type and amount", () => {

        // Arrange
        let transaction = new Transaction(Date, "Credit", 500)

        // Act
        // Assert
        expect(transaction.getDate()).toEqual(Date);
        expect(transaction.getTypeOfTransaction()).toEqual("Credit");
        expect(transaction.getAmount()).toBe(500);

    });


    it("should be able to create a debit transaction with a date, type and amount", () => {

        // Arrange
        let transaction = new Transaction(Date, "Debit", 500)

        // Act
        // Assert
        expect(transaction.getDate()).toEqual(Date);
        expect(transaction.getTypeOfTransaction()).toEqual("Debit");
        expect(transaction.getAmount()).toBe(500);

    });


    it("should not allow transactions of any type other than credit or debit", () => {

        // Arrange
        // Act
        // Assert
        expect(
            function () {
                new Transaction(Date, "balloons", 500);
            }).toThrowError("Transactions can only be of type credit or debit.")
    });

});