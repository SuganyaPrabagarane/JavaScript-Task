/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
// Your code here

class User {
    constructor(username,email) {
    this.username = username;
    this.email = email;
}
showInfo(){
    console.log( `Usernmae: ${this.username} and email: ${this.email}`)
}
changeEmail(newEmail){
    this.email = newEmail
}
   
}
const user = new User('suganya','suganya@gmail.com');
user.showInfo();
user.changeEmail('prabagarane@gmail.com');
user.showInfo();