/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

const shoppingCart = {
    items: [
        {name: 'Banana', price: 3},
        {name: 'Apple', price: 4},
        {name: 'Curd', price: 3.9},
    ]
}

const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);