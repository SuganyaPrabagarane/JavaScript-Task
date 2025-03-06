/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

function Employee(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.increaseSalary = function ()
        {console.log('Increase Salary by 10%:', this.salary + this.salary * 0.1)};
}

const employee1 = new Employee('Suganya', 'Fullstack Developer', 3000);
employee1.increaseSalary();