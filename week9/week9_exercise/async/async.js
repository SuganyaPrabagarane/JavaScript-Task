'use strict';















/* 
Task 6: API Simulation (Promise)  
---------------------------------------
Convert `getUserProfile(userExists)` into a Promise  
If `userExists === true`, **resolve after 2 sec** with `"User profile loaded"`  
If `userExists === false`, **reject after 2 sec** with `"User not found"`  
*/

function getUserProfile(userExists) {
    // Your code here
}

// Test Cases
getUserProfile(true).then(console.log).catch(console.error);
// Expected: "User profile loaded" (after 2 sec)
getUserProfile(false).then(console.log).catch(console.error);
// Expected: "User not found" (after 2 sec)


/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
Convert `fetchUserDataAsync(shouldFail)` to use `async/await`  
If `shouldFail === false`, wait **2 sec** and return `"User data loaded"`  
If `shouldFail === true`, wait **2 sec** and throw `"Failed to fetch data"`  
*/

async function fetchUserDataAsync(shouldFail) {
    // Your code here
}

// Test Cases
fetchUserDataAsync(false).then(console.log).catch(console.error);
// Expected: "User data loaded" (after 2 sec)
fetchUserDataAsync(true).then(console.log).catch(console.error);
// Expected: "Failed to fetch data" (after 2 sec)


/* 
Task 8: E-commerce Checkout (Async/Await)  
---------------------------------------
Convert `checkoutCart()` to use `async/await`  
   Wait **1 sec** → `"Checking stock..."`  
   Wait **2 sec** → `"Payment processed"`  
   Wait **1 sec** → `"Order completed!"`  
*/

async function checkoutCart() {
    // Your code here
}

// Test Case
checkoutCart().then(() => console.log("Thanks for shopping!"));
// Expected:
// "Checking stock..." (after 1 sec)
// "Payment processed" (after 2 more sec)
// "Order completed!" (after 1 more sec)
// "Thanks for shopping!" (at the end)


/* 
Task 9: Fetch Product Details (Async/Await)  
---------------------------------------
Convert `fetchProductDetails(hasError)` to use `async/await`  
If `hasError === false`, wait **3 sec** and return `"Product details retrieved"`  
If `hasError === true`, wait **3 sec** and throw `"Error loading product"`  
Use **try/catch** to handle errors  
*/

async function fetchProductDetails(hasError) {
    // Your code here
}

// Test Cases
fetchProductDetails(false).then(console.log).catch(console.error);
// Expected: "Product details retrieved" (after 3 sec)
fetchProductDetails(true).then(console.log).catch(console.error);
// Expected: "Error loading product" (after 3 sec)