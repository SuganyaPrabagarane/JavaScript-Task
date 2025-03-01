/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

const employees = [
    { name: 'Suganya', position: 'Developer', salary: 4000},
    { name: 'Sonia', position: 'Project Manager', salary: 4500},
    { name: 'Fizza', position: 'UI Designer', salary: 4200},
    { name: 'Prabagarane', position: 'Software Engineer', salary: 4600},
]

function calculateTotalSalary () {
    let totalSalary = 0;
    for (let i=0; i<employees.length; i++){
        totalSalary += employees[i].salary;
    }
    console.log('Total salary of all employees:',totalSalary,'€');
}
calculateTotalSalary();