/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

const cars = [
    { brand: "Tesla", model: "Model S", year: 2022, isElectric: true },
    { brand: "Ford", model: "Mustang GT", year: 2021, isElectric: false },
    { brand: "Toyota", model: "MPrius", year: 2024, isElectric: false },
    { brand: "BMW", model: "M5", year: 2022, isElectric: false },
    { brand: "Rivian", model: "R1T", year: 2000, isElectric: true }
];

const findOldestCar = () => {
    cars.sort(function (a, b) {
        let firstCar = a.year;
        let secondCar = b.year;
        if (firstCar < secondCar) { return -1 }
        if (firstCar > secondCar) { return 1 }
        return 0;
    })
    //console.log('After sorting cars by years:',cars);
    console.log('Car details with the earliest year:', cars[0]);
}
findOldestCar();
