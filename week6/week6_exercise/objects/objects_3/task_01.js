/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/
// Your code here

function User(username, email) {
    this.username = username;
    this.email = email;
    this.showInfo = function()
     {
     console.log(`Usernmae: ${this.username} and email: ${this.email}`)
 }
}

const user1 = new User('Suganya', 'suganya@gmail.com');
user1.showInfo()


