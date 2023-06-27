import { Transaction } from "../src/Transaction.js";

describe("Transaction Class Tests", () => {


    it("should be able to create a credit transaction with a date, type and amount", () => {

        // Arrange
        let transaction = new Transaction(new Date(), "Credit", 500)

        // Act
        // Assert
        expect(transaction.getDate()).toEqual(new Date());
        expect(transaction.getTypeOfTransaction()).toEqual("Credit");
        expect(transaction.getAmount()).toBe(500);

    });


    it("should be able to create a debit transaction with a date, type and amount", () => {

        // Arrange
        let transaction = new Transaction(new Date(), "Debit", 500)

        // Act
        // Assert
        expect(transaction.getDate()).toEqual(new Date());
        expect(transaction.getTypeOfTransaction()).toEqual("Debit");
        expect(transaction.getAmount()).toBe(500);

    });


    it("should not allow transactions of any type other than credit or debit", () => {

        // Arrange
        // Act
        // Assert
        expect(
            function () {
                new Transaction(new Date(), "balloons", 500);
            }).toThrowError("Transactions can only be of type credit or debit.")
    }),


        it("should ensure that the transaction amount is a numeric value greater than 0", () => {

            // Arrange
            // Act
            // Assert
            expect(
                function () {
                    new Transaction(new Date(), "Credit", "notNumericValue")
                }).toThrowError("Transaction amount must be a numeric value greater than 0")


        }),


        it("should throw an error if an invalid date type is provided", () => {

            // Arrange
            let date = "Not a date";

            // Act
            // Assert
            expect(
                function () {
                    new Transaction(date, "Credit", 500)
                }).toThrowError("Date argument must be of type Date.")

        });


});
