// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here

// Compare elements between 2 arrays
const compareAnimals = () => {
    for (let i=0; i<reserve1Animals.length; i++){
        let j=0;
        while (j < reserve2Animals.length){
            if (reserve1Animals[i] == reserve2Animals[j]){
                console.log(`Common Species: ${reserve1Animals[i]}`);
                }
            j++;
        }
    }
}
compareAnimals();

// Compare elements within an array
const animals = [...reserve1Animals,...reserve2Animals]; 
const animalConcat = reserve1Animals.concat(reserve2Animals);

const compareAnimals1 = () => {
    for (let i=0; i<animals.length-1; i++){
        let j=i+1;
        while (j < animals.length){
            if (animals[i] == animals[j]){
                console.log(`Common Species: ${animals[i]}`);
                }
            j++;
        }
    }
}
//compareAnimals1();
