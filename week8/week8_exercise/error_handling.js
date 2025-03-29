'use strict';

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
    try {
        let c = 2 + 4;
        add();
    } catch (error) {
        console.error('Task_1: Error caught: function is not defined');
    }
}
task1();

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
    try {
        c = a + 5;
    } catch (error) {
        console.error('Task_2: ReferenceError caught: variable is not defined');

    }
}
task2();

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
    try {
        c = a + b;
        add();
    } catch (error) {
        console.error('Task_3: Reference Error: variables are not defined');
        console.error('Error caught: Undefined function');
    } finally {
        console.log('Task completed')
    }
}
task3();

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
    try {
        const object = JSON.parse(jsonString);
        console.log('Task_4:', object)
    } catch (error) {
        console.error('Task_4: Error caught: Invalid JSON');
    }
}
parseJSON('{"name": "Alice", "age": 25}');
parseJSON("Invalid JSON text");

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
    try {
        if (age >= 18) {
            console.log('Task_5: Access granted.')
        }
    } catch (error) {
        console.error('Task_5: Error: You must be at least 18.');
    }
}
checkAge(20);
checkAge(16); // not getting error message

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
    try {
        const userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
    } catch (error) {
        console.log('Error in JSON');
    }
}

function getUser() {
    try {
        const returnedUser = localStorage.getItem('user');
        const userObject = JSON.parse(returnedUser);
        console.log(userObject);
    } catch (error) {
        console.log('Task_6: Error: Invalid JSON');
    }
}
saveUser({ name: "Alice", age: 25 });
console.log(getUser());

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
    try {
        let checking = obj[key];
        console.log('Task_7:', checking);

    } catch (error) {
        console.log('Task_7: Property not found.')
    }
}
checkProperty({ name: "Bob", age: 30 }, "name");
checkProperty({ name: "Bob", age: 30 }, "email");

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}
fetchData("https://jsonplaceholder.typicode.com/users");
fetchData("invalid-url");

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function checkBrokenURI(malformedURI) {
    try {
        return decodeURIComponent(malformedURI);
    } catch (error) {
        console.log("URIError");
    }
}

console.log(checkBrokenURI("https%3A%2F%2Fexample.com"));
console.log(checkBrokenURI("%"));

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
    try {
        localStorage.clear();
        console.log('Task 10: Local storage cleared');
    } catch (error) {
        console.error(error.message);
    }
}
clearStorage();