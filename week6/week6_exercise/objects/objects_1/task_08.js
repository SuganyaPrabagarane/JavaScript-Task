/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    isElectric: true
  };

const checkCar = () => car.isElectric ? 'The car is eco-friendly!' : 'This car runs on fuel.'
console.log(checkCar());
    
