/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

const shoppingCart = {
   items: [ { name: 'Bananas', price: 1.98, quantity: 2},
            { name: 'Orange', price: 3.5, quantity: 1.5},
            { name: 'Milk', price: 4, quantity: 3},
            { name: 'Egg', price: 2.98, quantity: 10},
            { name: 'Curd', price: 3.45, quantity: 1}
        ]
}

const calculateTotalPrice =() =>{
    let totalPrice = 0;
    for (let i=0; i < shoppingCart.items.length; i++){
        totalPrice += shoppingCart.items[i].price;
    }
    console.log('Total price of all items:',totalPrice);
}
calculateTotalPrice();