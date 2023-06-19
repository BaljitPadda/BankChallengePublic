import Account from "../src/Account.js";

describe('Account Class Tests', () => {

    it("should have a method that allows you to deposit a sum of money into the bank account", () => {

        // Arrange
        let account1 = new Account();
        let sum = 150;
        let expected = 150;

        // Act

        account1.deposit(sum);
        console.log(account1.getBalance());

        // Assert

        expect(account1.getBalance()).toEqual(expected);

    });


});
