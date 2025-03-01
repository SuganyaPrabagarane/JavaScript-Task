/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
    { name: "Alice", age: 20, grade: 95 },
    { name: "Bob", age: 22, grade: 80 },
    { name: "Charlie", age: 21, grade: 70 },
    { name: "David", age: 23, grade: 91 },
    { name: "Eve", age: 20, grade: 85 }
]

students.forEach(student => {
    if (student.grade > 90){
        console.log(student.name);
    }
});
