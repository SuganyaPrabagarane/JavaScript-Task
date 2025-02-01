/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
    let password;
    password = window.prompt('Enter the password:');
    while (password !== 'correct123'){
        if (password === 'correct123'){
            console.log('Access granted');
            break;
        } else {
            password = window.prompt('Try again!');
        }
    }
    console.log('Access granted');
}

validatePassword();

// Account locked when user enter wrong password for 3 times.

const validatePassword1 = () => {
    let password = window.prompt('Enter the password:');

    for (i = 1; i<=3; i++) {

        if (password === 'correct123'){
            console.log('Accesee granted');
        } 
        else if (i===3 && password !== 'correct123'){
            console.log('You entered wrong password more than 3 times')
            console.log('Account locked');
        }
        else {
            password = window.prompt('Try again!');
        }
    }
}

validatePassword1();