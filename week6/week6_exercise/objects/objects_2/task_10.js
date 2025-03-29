/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

const foxPack = {
    foxes: [
        { name: 'Foxy', age: 1, furColor: 'Red' },
        { name: 'Blaze', age: 2, furColor: 'Orange' },
        { name: 'Shadow', age: 5, furColor: 'Gray' },
        { name: 'Fiona', age: 1.5, furColor: 'Red and Orange' },
    ]
}

// using filter method
const filteredFox = foxPack.foxes.filter(fox => fox.age < 2);
console.log(filteredFox);


// using loop
function youngerFox() {
    for (let i = 0; i < foxPack.foxes.length; i++) {
        if (foxPack.foxes[i].age < 2) {
            console.log(foxPack.foxes[i]);
        }
    }
}
youngerFox();
