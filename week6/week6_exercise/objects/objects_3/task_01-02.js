/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/
// Your code here

function User(username, email) {
    this.username = username;
    this.email = email;
}

const user1 = new User('Suganya', 'suganya@gmail.com');
console.log(user1)

// showInfo() {
//     return `${this.username} ${this.email}`;
// }

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
// Your code here

class User {
    constructor(username, email) {
    this.username = username;
    this.email = email;
}
}
changeEmail(newEmail){
    return this.email = newEmail;
}