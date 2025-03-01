/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

const foxPack = {
    foxes: [
            {   name: 'Foxy', age: 1, furColor: 'Red' },
            {   name: 'Blaze', age: 2, furColor: 'Orange' },
            {   name: 'Shadow', age: 5, furColor: 'Gray' },
            {   name: 'Fiona', age: 1.5, furColor: 'Red and Orange' },
        ]
}

function youngerFox () {                        // How to write with filter method
    for (let i=0; i<foxPack.foxes.length; i++){
        if (foxPack.foxes[i].age < 2){
            console.log(foxPack.foxes[i]);
    }
}
}
youngerFox();
    