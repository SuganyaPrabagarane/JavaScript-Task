// const animalSimple = ["Fox", "Eagle","Shark", "Wolf", "Panda", "Tiger", "Dolphin", "owl", "Kangaroo", "Unicorn"];
// console.log(animalSimple)

const animals = [
    {name: 'Fox', color: 'White', type: 'Mammal', age: 4, },
    {name: "Lion", color: "Golden", type: "Mammal", age: 5},
    {name: "Parrot", color: "Green", type: "Bird", age: 2},
    {name: "Elephant", color: "Gray", type: "Mammal", age: 10},
    {name: "Shark", color: "Gray", type: "Fish", age: 15},
    {name: "Cheetah", color: "Spotted Yellow", type: "Mammal", age: 3},
    {name: "Dolphin", color: "Gray", type: "Mammal", age: 5},
    {name: "Snake", color: "Green ", type: "Reptile", age: 3},
    {name: "Penguin", color: "Black and White", type: "Bird", age: 3},
    {name: "Frog", color: "Blue", type: "Amphibian", age: 2},
    {name: "Octopus", color: "Red and Brown", type: "Cephalopod", age: 3},
    {name: "Turtle", color: "Green", type: "Reptile", age: 50},
    {name: "Cuttlefish", color: "Varies", type: "Cephalopod", age: 3},
    {name: "Swordfish", color: "Blue", type: "Fish", age: 3}
]

const animalList = document.querySelector('#animalList');
const addAnimalButton = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortButton = document.querySelector('#sortAnimals');
const filterType = document.querySelector('#filterType');


const displayAnimals =(animalArray) => {
    animalList.innerHTML = ''; // Will clean the ul every time before doing the function
    for (const animal of animalArray){
        const li = document.createElement('li');
        li.textContent = (`${animal.name} (${animal.type}), ${animal.color}, ${animal.age}`);
        animalList.appendChild(li)
    }
}

const addAnimal =() => {
    const nameInput = document.querySelector('#newAnimalName').value.trim(); // trim() to avoid empty spaces 
    animals.push(nameInput);
    displayAnimals(animals);
    document.querySelector('#newAnimalName').value = '';
}

const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredAnimals = animals.filter(animal => (animal.name).toLowerCase().includes(searchText));
    displayAnimals(filteredAnimals);
}

const sortAnimals = () => {
    console.log('sorting animals')
    animals.sort(function (a,b){
    let firstAnimal = a.name.toLowerCase();
    let secondAnimal = b.name.toLowerCase();
    if (firstAnimal<secondAnimal) { return -1;}
    if (firstAnimal>secondAnimal) { return 1;}
    return 0;
    });
    displayAnimals(animals);
    
}

const filterByTypeAnimal = () => {
    const selectedType =  filterType.value;
    if (selectedType === 'All') {
        displayAnimals(animals);
    }
    else{
        const filteredAnimals =animals.filter(animal => (animal.type) === selectedType);
        displayAnimals(filteredAnimals);

    }
}

filterType.addEventListener('change', filterByTypeAnimal)
addAnimalButton.addEventListener('click',addAnimal);
searchInput.addEventListener('input',searchAnimal);
sortButton.addEventListener('click',sortAnimals);

displayAnimals(animals); 