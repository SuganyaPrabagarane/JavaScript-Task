/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

const pet = {
    species: 'Fox',
    name:'Fiona',
    isVaccinated: false
}

const vaccination =() => {
    if (!pet.isVaccinated){
        return 'Vaccination required';
    }
}
console.log(vaccination());