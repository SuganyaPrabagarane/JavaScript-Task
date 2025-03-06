/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

function Car (brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.age = function()
    { console.log(`Car's age: ${2025 - this.year} years`)};
}

const car1 = new Car('Skoda','Fabia', 2010);
car1.age();