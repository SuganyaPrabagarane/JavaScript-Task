/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */


const checkAdult = (age) => {
    if (age>=18)
     {
        return 'You are an adult';

    }
}
console.log(checkAdult(20));


const checkAdult1 = (age) => {
    return age>=18? 'You are an adult':'Not an adult' ;
}

console.log(checkAdult1(19));
console.log(checkAdult1(15));
