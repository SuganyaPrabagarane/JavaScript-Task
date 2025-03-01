/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

const cars = [
    { brand: 'Ford', model: 'Mustang GT', horsepower: 450 },
    { brand: 'Chevrolet', model: 'Camaro SS', horsepower: 450 },
    { brand: 'Tesla', model: 'Model S', horsepower: 1020 },
    { brand: 'BMW', model: 'M3', horsepower: 473 }
]

const highestHorsePower =() =>{
    cars.sort(function (a,b){
        let firstCar = a.horsepower;
        let secondCar = b.horsepower;
        if (firstCar < secondCar) {return 1}  // sorting from highest to lowest
        if (firstCar > secondCar) {return -1}
        return 0;
    })
    console.log('Car with highest horsepower:', cars[0]);
}
highestHorsePower();

// The loop is stopped when it find the higher value. its not continue to check further, even the last element is the highest number
const highestHorsePower1 = () => {
    let maxHorsePower = cars[0].horsepower;
    for (let i=1; i<cars.length; i++){
        if(cars[i].horsepower > maxHorsePower){
            maxHorsePower = cars[i];
        }
    }
    console.log(maxHorsePower);
}
//highestHorsePower1();


