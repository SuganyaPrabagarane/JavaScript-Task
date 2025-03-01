/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
    accountHolder: 'Suganya',
    balance: 1500.75,
    transactions: [200.50, -50.00, 1000.00, -250.25, 50.00]
  };

  function calculateBalance () {      // will  use reduce method to add transaction
    let totalTransaction = 0;
    for (let i=0; i<bankAccount.transactions.length; i++){
        totalTransaction += bankAccount.transactions[i];
    }
    let balanceAmount = bankAccount.balance - totalTransaction;
    console.log(balanceAmount);
  }
  calculateBalance();

 

