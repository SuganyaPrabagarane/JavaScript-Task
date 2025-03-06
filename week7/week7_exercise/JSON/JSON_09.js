/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

const shoppingCartJSON = '{"items":[{"name":"Banana","price":3},{"name":"Apple","price":4},{"name":"Curd","price":3.9}]}';

function totalCartValue (){
    const shoppingCartObject = JSON.parse(shoppingCartJSON);
        return shoppingCartObject.items.reduce((sum, item) => sum + item.price, 0);
    }
    

console.log(totalCartValue());
    
    

