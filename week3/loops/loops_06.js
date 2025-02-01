/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
    let count = 0;
    let sum = 0, average = 0, getNumber;
    let numbersArray = [];
    let answer ='';
    while (answer !== 'n'){
        getNumber = Number(window.prompt('Enter the number:'));
        sum = sum + getNumber;
        count++;
        numbersArray.push(getNumber);
        average = sum / count;

        answer = window.prompt('Do you wan to continue giving numbers? (y/n)');
        
        if (answer === 'n'){
            break;
        } 
        if (answer !== 'y'){
            prompt('Please enter a valid response (y / n)');
        }
    }

    console.log(`The average of all entered number is:${average}`);
    console.log(`Sum:${sum}`);
    console.log(`Count:${count}`);
    console.log(`Entered Numbers are:`, (numbersArray));
    
}

askToContinue();



const askToContinue2 = () => {
    let count = 0;
    let sum = 0;
    let answer = ""
    while (answer !== "n") {
    let number = Number(prompt("Please enter a number)"))
    sum += number;
    count++
    answer = prompt("Do you want to continue giving numbers?")
    if (answer === "n") {
    break;
    }
    if (answer !== "y") {
    alert("Please enter a valid answer (y or n)")
    }
    }
    console.log("Average of entered numbers", (sum / count))
    }
    askToContinue2()