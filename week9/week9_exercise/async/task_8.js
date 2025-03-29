/* 
Task 8: E-commerce Checkout (Async/Await)  
---------------------------------------
Convert `checkoutCart()` to use `async/await`  
   Wait **1 sec** → `"Checking stock..."`  
   Wait **2 sec** → `"Payment processed"`  
   Wait **1 sec** → `"Order completed!"`  
*/

async function checkoutCart() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Checking stock..');

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Payment processed');

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Order completed');
}

// Test Case
checkoutCart().then(() => console.log("Thanks for shopping!"));
// Expected:
// "Checking stock..." (after 1 sec)
// "Payment processed" (after 2 more sec)
// "Order completed!" (after 1 more sec)
// "Thanks for shopping!" (at the end)