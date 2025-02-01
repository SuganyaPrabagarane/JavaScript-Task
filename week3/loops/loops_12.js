/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
    let groceryItems;
    let groceryList = [];
    while (groceryItems !== 'done'){
    groceryItems = window.prompt('Enter the grocery items:');
    if (groceryItems === 'done'){
        break;
    }
    groceryList.push(groceryItems);

    }
    
    console.log('Grocery List:', groceryList);
}

buildGroceryList();