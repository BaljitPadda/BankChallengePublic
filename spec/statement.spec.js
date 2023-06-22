import { Statement } from "../src/Statement.js";

describe("StatementPrinter Class Tests", () => {

    it("should be able to print out a bank account statement", () => {

        // Arrange
        let expected = "Printed";

        // Act
        // Assert
        expect(Statement.print()).toEqual(expected);

    });


});

