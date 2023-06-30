# Baljit Padda Bank Challenge Solution

## Instructions
```
To run tests, please use 'npm test' in the terminal.

To run the index.js file, please use 'node src/index.js' in the terminal.
```
## My Domain Models

Please see below the user stories and domain models I created from the requirements. 
<br/>
```
User story: I want to be able to deposit money into a bank account.
User story: I want to be able to withdraw money from a bank account.
User story: I want a bank account to store a list of transactions made.
```

| Objects | Properties                        | Messages          | Output               |
| ------- | --------------------------------- | ----------------- | -------------------- |
| Account | balance @Integer                  | deposit @Integer  | @Void                |
|         | transactions @Array[@Transaction] | withdraw @Integer | @Void                |
|         |                                   | getBalance()      | @Integer             |
|         |                                   | getTransactions() | @Array[@Transaction] |

<br/>

```
User story: I want a transaction to have a date, a type and an amount.
```

| Objects     | Properties                | Messages               | Output   |
| ----------- | ------------------------- | ---------------------- | -------- |
| Transaction | date @Date                | getDate()              | @Date    |
|             | typeOfTransaction @String | getTypeOfTransaction() | @String  |
|             | amount @Integer           | getAmount()            | @Integer |

<br/>

```
User story: I want to be able to print a bank account statement containing details of all transactions/each transaction made.
User story: I want the most recent transaction to display first.
User story: I want the statement to be in reverse chronological order.
User story: I want to store the current balance after a transaction is made.
```

| Objects   | Properties | Messages        | Output  |
| --------- | ---------- | --------------- | ------- |
| Statement |            | print(@Account) | @String |
|           |            |                 |         |

<br/>

* Please Note: for legibility, I have not included all methods of the Statement class in the above domain model. I have included only the main function of the class which is to print a bank account statement. 

<br/>

---
Statement Class code snippet (before refactoring):
---

```
Statement Class code snippet (old version, for reference only):

static header = "date       || credit  || debit  || balance ";
creditColumn = ""
debitColumn = ""
currentBalance = 0;
row = [""];

sortedTransactions.forEach(transaction => {
    
                let amount = `${transaction.getAmount().toFixed(2)}`
    
                if (transaction.getTypeOfTransaction() == "Credit") {
                    creditColumn = Statement.padString(chalk.green(amount), 7)
                    debitColumn = Statement.padString(" ", 6)
                    currentBalance += transaction.getAmount()
                }
    
                if (transaction.getTypeOfTransaction() == "Debit") {
                    debitColumn = Statement.padString(chalk.red(amount), 6)
                    creditColumn = Statement.padString(" ", 7)
                    currentBalance -= transaction.getAmount()
                }
                row.push(`${transaction.getDate().toLocaleDateString("en-GB")} || ${creditColumn} || ${debitColumn} || ${currentBalance} `);
            });
    
            //using reverse() as transactions need to be printed in reverse chronological order, newest to oldest.
            //using join() to make row (which is an array of strings) into one big string with new lines.

            return header + `\n` + row.reverse().join(`\n`);

```

---
## References/Sources:

https://www.golinuxcloud.com/javascript-sort-by-date/

https://software.com/en/technical-posts/mocking-calls-with-jasmine 
(Returning values from Jasmine spies)

https://stackoverflow.com/questions/21589401/javascript-users-incorrect-locale-with-date-formatting

