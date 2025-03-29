/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
  accountHolder: 'Suganya',
  balance: 1500.75,
  transactions: [200.50, -50.00, 1000.00, -250.25, 50.00]
};

// Using reduce method
function calculateBalance1(bankAccount) {
  const totalTransaction = bankAccount.transactions.reduce((total, transaction) => total + transaction, 0);
  let balanceAmount = bankAccount.balance - totalTransaction;
  return balanceAmount.toFixed(2);
}
console.log(calculateBalance1(bankAccount));


// using for loop
function calculateBalance() {
  let totalTransaction = 0;
  for (let i = 0; i < bankAccount.transactions.length; i++) {
    totalTransaction += bankAccount.transactions[i];
  }
  let balanceAmount = bankAccount.balance - totalTransaction;
  console.log(balanceAmount);
}
calculateBalance();



