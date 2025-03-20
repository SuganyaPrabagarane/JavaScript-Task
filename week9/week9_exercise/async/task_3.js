/* 
Task 3: Login System (Callback)  
---------------------------------------
Fix `loginUser(username, validUser, callback)`  
If `validUser === true`, call the callback with `"Welcome, [username]!"` after **1 second**  
If `validUser === false`, call the callback immediately with `"Invalid login"`  
*/

function loginUser(username, validUser, callback) {

    if (validUser) {
        setTimeout(() => {
            callback(`Welcome,${username}!`);
        }, 1000);

    } else {
        console.log('Invalid login')
    }

}

// Test Cases
loginUser("Sam", true, (message) => console.log(message));
// Expected: "Welcome, Sam!" (after 1 sec)
loginUser("Alex", false, (message) => console.log(message));
// Expected: "Invalid login" (immediately)