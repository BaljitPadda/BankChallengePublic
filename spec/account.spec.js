import Account from "../src/Account.js";

describe('Account Class Tests', () => {

    it("should create a bank account object", () => {

        // Arrange
        // Act
        let account1 = new Account();

        // Assert
        expect(account1).toBeDefined();

    }),


        it("should be able to get the bank account balance", () => {

            // Arrange
            let account1 = new Account();
            let expected = 0;

            // Act
            let actual = account1.getBalance();

            // Assert
            expect(actual).toEqual(expected);

        }),


        it("should have a method that allows you to deposit a sum of money into the bank account", () => {

            // Arrange
            let account1 = new Account();
            let sum = 150;
            let expected = 150;

            // Act
            account1.deposit(sum);

            // Assert
            expect(account1.getBalance()).toEqual(expected);

        }),


        it("should have a method that allows you to withdraw a sum of money from the bank account", () => {

            // Arrange
            let account1 = new Account();
            let sum = 50;
            let expected = -50;

            // Act
            account1.withdraw(sum);


            // Assert
            expect(account1.getBalance()).toEqual(expected);

        }),


        it("should ensure that you cannot deposit in a negative value", () => {

            // Arrange
            let account1 = new Account();
            let sum = -50;

            // Act
            // Assert
            expect(
                function () {
                    account1.deposit(sum);
                }).toThrowError("Deposit sum must be a positive number greater than 0. Deposit sum cannot be null, undefined, negative etc.");

        }),


        it("should ensure that you cannot withdraw a negative value", () => {

            // Arrange
            let account1 = new Account();
            let sum = -50;

            // Act
            // Assert
            expect(
                function () {
                    account1.withdraw(sum);
                }).toThrowError("Withdraw sum must be a positive number greater than 0. Withdraw sum cannot be null, undefined, negative etc.");

        }),


        it("should ensure that the sum to deposit in to the bank account is not undefined", () => {

            // Arrange
            let account1 = new Account();
            let sum = undefined;

            // Act
            // Assert
            expect(
                function () {
                    account1.deposit(sum);
                }).toThrowError("Deposit sum must be a positive number greater than 0. Deposit sum cannot be null, undefined, negative etc.");

        }),


        it("should ensure that the sum to withdraw from the bank account is not undefined", () => {

            // Arrange
            let account1 = new Account();
            let sum = undefined;

            // Act
            // Assert
            expect(
                function () {
                    account1.withdraw(sum);
                }).toThrowError("Withdraw sum must be a positive number greater than 0. Withdraw sum cannot be null, undefined, negative etc.");

        }),


        it("should ensure that the sum to deposit in to the bank account is not null", () => {

            // Arrange
            let account1 = new Account();
            let sum = null;

            // Act
            // Assert
            expect(
                function () {
                    account1.deposit(sum);
                }).toThrowError("Deposit sum must be a positive number greater than 0. Deposit sum cannot be null, undefined, negative etc.");

        }),


        it("should ensure that the sum to withdraw from the bank account is not null", () => {

            // Arrange
            let account1 = new Account();
            let sum = null;

            // Act
            // Assert
            expect(
                function () {
                    account1.withdraw(sum);
                }).toThrowError("Withdraw sum must be a positive number greater than 0. Withdraw sum cannot be null, undefined, negative etc.");

        }),


        it("should not allow you to deposit a sum of 0", () => {

            // Arrange
            let account1 = new Account();
            let sum = 0;

            // Act
            // Assert
            expect(
                function () {
                    account1.deposit(sum);
                }).toThrowError("Deposit sum must be a positive number greater than 0. Deposit sum cannot be null, undefined, negative etc.")


        }),


        it("should not allow you to withdraw a sum of 0", () => {

            // Arrange
            let account1 = new Account();
            let sum = 0;

            // Act
            // Assert
            expect(
                function () {
                    account1.withdraw(sum);
                }).toThrowError("Withdraw sum must be a positive number greater than 0. Withdraw sum cannot be null, undefined, negative etc.")


        }),


        it("should store each deposit made on the account, as a transaction", () => {

            // Arrange
            let account1 = new Account();
            let sum = 20;

            // Act
            account1.deposit(sum);
            // Assert
            expect(account1.transactions).toHaveSize(1);
        }),


        it("should store each withdrawal made on the account, as a transaction", () => {

            // Arrange
            let account1 = new Account();
            let sum = 20;

            // Act
            account1.withdraw(sum);
            // Assert
            expect(account1.transactions).toHaveSize(1);
        });


});

