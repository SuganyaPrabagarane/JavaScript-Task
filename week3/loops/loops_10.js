/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

const countdownTimer1 = () => {
    for (i=10; i>=0; i--){
        console.log(i);
        if (i===0){
            console.log("Time's up!");
        }
    }

}

countdownTimer1();


const countdownTimer2 = () => {
    let timer = Number(window.prompt('Enter the timer to start countdown'));
    for (i=timer; i>=0; i--){
        console.log(i);
        if (i===0){
            console.log("Time's up!");
        }
    }

}

countdownTimer2();