/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

const city = {
    name: 'Helsinki',
    population: 2148000,
    landmark: 'Suomalainen'
}

const checkCity =() => {
    if (city.population >1000000){
        return 'This is a big city!'
    }
}
console.log(checkCity());