/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
    let count = 0;
    let sum, average, getNumber;
    let continueOrNot;
    let numbersArray = [];
    while (getNumber !== 0){
        getNumber = Number(window.prompt('Enter the number:'));
        continueOrNot = window.prompt('Do you wan to continue giving numbers? (y/n)');
        if (continueOrNot == 'n'){
            break;
        }

        numbersArray.push(getNumber);
        count++;
        sum = sum + getNumber;
        average = sum / count ;
        

    }

    console.log(`The average of all entered number is:${average}`);
    console.log(`Sum:${sum}`);
    console.log(`Count:${count}`);
    console.log(`Entered Numbers are:`, (numbersArray));
    
}

askToContinue();