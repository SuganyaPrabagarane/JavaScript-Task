/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

const employees = [
    { name: "Suganya", role: "Backend Developer", workingHours: 40 },
    { name: "Prabagarane", role: "Software Engineer", workingHours: 38 },
    { name: "Devesh", role: "UI Designer", workingHours: 43 },
    { name: "Pragadhish", role: "Data Analyst", workingHours: 46 }
]

// using filter
const findWorkingHours = employees.filter(employee => employee.workingHours > 40);
console.log(findWorkingHours);

// using map
employees.map(employee => {
    if (employee.workingHours > 40) {
        console.log(employee);
    }
})
