// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ['Lion', 'Tiger', 'Panda'];

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here

// Using for Each loop:
animalNames.forEach(animalName => {
    let lettersInAnimal = '';
    for(let i =0; i<animalName.length; i++){
        lettersInAnimal += animalName[i] + ',';
    }
    console.log(`Letters is ${animalName}: ${lettersInAnimal}`);
});

// Using for of loop:
for (const animalName of animalNames){
    let lettersInAnimal = '';
    for(let i =0; i<animalName.length; i++){
        lettersInAnimal += animalName[i] + ',';
    }
    console.log(`Letters is ${animalName}: ${lettersInAnimal}`);
}


const lettersOfAnimalName = () =>{
    for (let i=0; i<animalNames.length; i++){
        let j=0;
        let lettersInAnimal = '';
        while(j<animalNames[i].length){
            lettersInAnimal += animalNames[i][j] + ',';
            j++;
        }
        console.log(`Letters is ${animalNames[i]}: ${lettersInAnimal}`);
    }
}
//lettersOfAnimalName();

