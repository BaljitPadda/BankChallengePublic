# Baljit Padda Bank Challenge Solution

## Instructions
```
To run tests, please use 'npm test' in the terminal.

To run the index.js file, please use 'node src/index.js' in the terminal.
```

## My Domain Models

Please see below the user stories and domain models I created from the requirements.
```
User story: I want to be able to deposit money into a bank account.
User story: I want to be able to withdraw money from a bank account.
User story: I want a bank account to store a list of transactions made.
```

| Objects | Properties                        | Messages          | Output |
| ------- | --------------------------------- | ----------------- | ------ |
| Account | balance @Integer                  | deposit @Integer  | @Void  |
|         | transactions @Array[@Transaction] | withdraw @Integer | @Void  |
|         |                                   |                   |        |

```
User story: I want a transaction to have a date, a type and an amount.
```

| Objects     | Properties                | Messages | Output |
| ----------- | ------------------------- | -------- | ------ |
| Transaction | date @Date                |          |        |
|             | typeOfTransaction @String |          |        |
|             | amount @Integer           |          |        |

```
User story: I want to be able to print a bank account statement containing details of each transaction made.
```

| Objects   | Properties | Messages           | Output  |
| --------- | ---------- | ------------------ | ------- |
| Statement |            | print(@Account)    | @String |
|           |            | padString(@String) |         |
|           |            |                    |         |

```
User story: I want the most recent transaction to display first AND
I want the statement to be in reverse chronological order.
```


## References/Sources:

https://www.golinuxcloud.com/javascript-sort-by-date/

https://software.com/en/technical-posts/mocking-calls-with-jasmine 
(Returning values from Jasmine spies)

https://stackoverflow.com/questions/21589401/javascript-users-incorrect-locale-with-date-formatting

