/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

const fox = {
    name: 'Fiona',
    age: 3,
    habitat: 'Woodlands'
}

const youngOrAdult = () => fox.age < 3 ? 'This fox is young' : 'This fox is an adult';
console.log(youngOrAdult());