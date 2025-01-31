/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/


//Using ternary operator
const canVote1 = (age) => {
    return age >=18 ? 'Eligible to vote': 'Not eligible to vote';

}
console.log(canVote1(18));
console.log(canVote1(16));


//If else statement
const canVote2 = (age) => {
    if (age >= 18){
        return 'Eligible to vote';
    } else {
        return 'Not eligible to vote';
    }
}
console.log(canVote2(10));
console.log(canVote2(20));


//If statement
const canVote3 = (age) => {
    if (age >= 18){
        return 'Eligible to vote';
    }

    return 'Not eligible to vote';
}
console.log(canVote3(50));
console.log(canVote3(20));