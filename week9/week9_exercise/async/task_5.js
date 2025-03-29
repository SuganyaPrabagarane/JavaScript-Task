/* 
Task 5: Order Processing (Promise Chain)  
---------------------------------------
Convert `processOrderPromise()` to return a promise chain:  
   Wait **2 sec** → Resolve `"Order received"`  
   Wait **3 sec** → Resolve `"Preparing order"`  
   Wait **1 sec** → Resolve `"Order ready for pickup"`  
*/

function processOrderPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Order received"), 2000);
    })
        .then((message) => {
            console.log(message);
            return new Promise((resolve) => {
                setTimeout(() => resolve("Preparing order"), 3000);
            });
        })
        .then((message) => {
            console.log(message);
            return new Promise((resolve) => {
                setTimeout(() => resolve("Order ready for pickup"), 1000);
            });
        })
        .then((message) => {
            console.log(message);
        });
}

// Test Case
processOrderPromise().then();
// Expected: 
// "Order received" (after 2 sec)
// "Preparing order" (after 3 more sec)
// "Order ready for pickup" (after 1 more sec)
