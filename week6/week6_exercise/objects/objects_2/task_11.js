/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

const gameCharacter = {
  name: "Archer",
  level: 5,
  health: 100,
  inventory: [
    { item: "Bow", quantity: 1 },
    { item: "Arrow", quantity: 50 },
    { item: "Health Potion", quantity: 3 }
  ]
};

// using map method
const displayInventoryItem = gameCharacter.inventory.map(i => i.item);
console.log(displayInventoryItem);


// using loop
const displayCharactersInventory = () => {
  let i = 0;
  while (i < gameCharacter.inventory.length) {
    console.log(gameCharacter.inventory[i].item);
    i++;
  }
}
displayCharactersInventory();