const shoppingListObject = {
    items: ['Milk', 'Curd','Banana', 'Orange','Coffe Powder']
}

// const shoppingListJSON = JSON.stringify(shoppingList);
// localStorage.setItem('shoppingListLocalStorage', shoppingListJSON);

function addItemToList(item){
    // const returnedShoppingList = localStorage.getItem('shoppingListLocalStorage');
    // const shoppingListObject = JSON.parse(returnedShoppingList);
    console.log(shoppingListObject);
    shoppingListObject.items.push('Apple');
    console.log('After adding new item into shoppinglist:',shoppingListObject);
}
addItemToList();