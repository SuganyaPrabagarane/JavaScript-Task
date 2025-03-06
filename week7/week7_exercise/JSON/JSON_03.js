/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

const classroom = [
    {name:'Suganya', age: 10, grade: 5},
    {name:'Sonia', age: 12, grade: 7},
    {name:'Devesh', age: 6, grade: 1},
    {name:'Pragadhish', age: 8, grade: 3},
]

const jsonArray = JSON.stringify(classroom);
console.log(jsonArray);