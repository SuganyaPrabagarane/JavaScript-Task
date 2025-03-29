/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

const shoppingCart = {
    items: [{ name: 'Bananas', price: 1.98, quantity: 2 },
    { name: 'Orange', price: 3.5, quantity: 1.5 },
    { name: 'Milk', price: 4, quantity: 3 },
    { name: 'Egg', price: 2.98, quantity: 10 },
    { name: 'Curd', price: 3.45, quantity: 1 }
    ]
}

// Using reduce method
function calculateTotalPrice1(shoppingCart) {
    return shoppingCart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}
console.log('Total price of all items:', calculateTotalPrice1(shoppingCart), '€');

// using for loop
const calculateTotalPrice = () => {
    let totalCartPrice = 0;
    let itemprice = 0;
    for (let i = 0; i < shoppingCart.items.length; i++) {
        itemprice = shoppingCart.items[i].price * shoppingCart.items[i].quantity;
        console.log('Total price for each item:', itemprice)
        totalCartPrice += itemprice;
    }
    console.log('Total price of all items in the cart:', totalCartPrice.toFixed(2), '€');
}
calculateTotalPrice();

