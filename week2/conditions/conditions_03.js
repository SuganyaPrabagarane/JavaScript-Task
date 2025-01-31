/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/

const getGrade1 = (score) => {
    if (score >= 90){
        return 'Grade A';
    }
    else if (score>=80 && score<=89){
        return 'Grade B';
    }
    else {
        return 'Grade C'
         
    }
    
}

console.log(getGrade1(88));
console.log(getGrade1(98));
console.log(getGrade1(70));


//Using Switch statement

const getGrade2 = (score) => {
    switch (true) {
        case score >= 90:
            return 'Grade A';
        case score>=80 && score<=89:
            return 'Grade B';
        default:
            return 'Grade C';

    }
}

console.log(getGrade2(50));
console.log(getGrade2(90));
console.log(getGrade2(80));