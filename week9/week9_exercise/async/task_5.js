/* 
Task 5: Order Processing (Promise Chain)  
---------------------------------------
Convert `processOrderPromise()` to return a promise chain:  
   Wait **2 sec** → Resolve `"Order received"`  
   Wait **3 sec** → Resolve `"Preparing order"`  
   Wait **1 sec** → Resolve `"Order ready for pickup"`  
*/

// function processOrderPromise() {
//     return new Promise(() => {
//         setTimeout(() => {
//             console.log('Order received');
//         }, 2000)
//         setTimeout(() => {
//             console.log('Preparing order');
//         }, 3000)
//         setTimeout(() => {
//             console.log('order ready for pickup');
//         }, 4000);
//     })

// }

function processOrderPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Order received'), 2000)

            .then(
                (setTimeout(() => resolve('Preparing order')), 3000))

            .then(setTimeout(() => resolve('Order ready for pickup')), 4000);
    });

}

// Test Case
processOrderPromise().then(console.log);
// Expected: 
// "Order received" (after 2 sec)
// "Preparing order" (after 3 more sec)
// "Order ready for pickup" (after 1 more sec)
