import Account from "../src/Account.js";

describe('Account Class Tests', () => {

    it("should create a bank account object", () => {

        // Arrange
        // Act
        let account1 = new Account();

        // Assert
        expect(account1).toBeDefined();

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

            // Clean up

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


        it("should be able to get the bank account balance", () => {

            // Arrange
            let account1 = new Account();
            let expected = 0;

            // Act
            let actual = account1.getBalance();

            // Assert
            expect(actual).toEqual(expected)

        })

});


