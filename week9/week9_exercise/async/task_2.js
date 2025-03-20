/* 
Task 2: Order Processing (Callback)  
---------------------------------------
Write a function `processOrder(orderNumber, callback)`  
It should **wait 3 seconds** before calling the callback with:  
   `"Order [orderNumber] is ready for pickup."`  
*/

function processOrder(orderNumber, callback) {
    setTimeout(() => {
        callback(`Order ${orderNumber} is ready for pickup.`);

    }, 3000);
}

// Test Case
processOrder(101, (message) => console.log(message));
// Expected: "Order 101 is ready for pickup." (after 3 seconds)