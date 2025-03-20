/* 
Task 1: Delayed Greeting (Callback)  
---------------------------------------
Write a function `delayedGreet(name, callback)`  
After **2 seconds**, it should call `callback` with `"Hello, [name]!"`  
*/

function delayedGreet(name, callback) {
    setTimeout(() => {
        //callback('Hello', name);
        callback(`Hello, ${name}`);
    }, 2000);

}

// Test Case
delayedGreet("Alice", (message) => console.log(message));
// Expected: "Hello, Alice!" (after 2 seconds)