/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

const smartphone = {
    brand: "Samsung",
    model: "Galaxy S22",
    batteryLife: "22 hours",
    is5GEnabled: false
  };

const support5G = () => smartphone.is5GEnabled ? 'This phone supports 5G!' : 'This phone does not support 5G';
console.log(support5G());