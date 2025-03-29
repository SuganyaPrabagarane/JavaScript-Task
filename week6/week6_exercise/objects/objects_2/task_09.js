/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

const transactions = [
    { type: 'Credit', amount: 1000 },
    { type: 'Debit', amount: 500 },
    { type: 'Credit', amount: 300 },
    { type: 'Credit', amount: 200 },
    { type: 'Debit', amount: 150 },
]


function calculateBalance() {
    let balance = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type == 'Credit') {
            balance += transactions[i].amount
        } else {
            balance -= transactions[i].amount
        }
    }
    console.log('Balance:', balance);

}
calculateBalance();
