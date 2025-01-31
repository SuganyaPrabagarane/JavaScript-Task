/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "Not a fox fan, but that’s okay!"
Call the function with different ages and preferences.
 */

const checkFoxLover1 = (age, likesFoxes) => {
    if (age >= 18){
        if (likesFoxes){
            return 'You are an adult who likes foxes!';
        }
    } else {
        return 'Not a fox fan, but that’s okay!';
    }
}
console.log(checkFoxLover1(20,true));
console.log(checkFoxLover1(20,false));
console.log(checkFoxLover1(10,true));
console.log(checkFoxLover1(10,false));


const checkFoxLover2 = (age, likesFoxes) => {
    if (age >= 18 && likesFoxes) {
            return 'You are an adult who likes foxes!';
        }
    else {
        return 'Not a fox fan, but that’s okay!';
    }
}
console.log(checkFoxLover2(20,true));
console.log(checkFoxLover2(20,false));
console.log(checkFoxLover2(10,true));
console.log(checkFoxLover2(10,false));