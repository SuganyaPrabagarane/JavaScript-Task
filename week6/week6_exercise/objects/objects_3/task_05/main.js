/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

const product = {
    name: 'Curd',
    price: 10,
    quantity: 0,
}

const productName = document.querySelector('#product');
const price = document.querySelector('#price');
const inputQuantity = document.querySelector('#qty');
const totalPriceDisplay = document.querySelector('#totalPrice')
const addButton = document.querySelector('#addBtn');

let totalPrice = 0;
productName.textContent = product.name;
price.textContent = `${product.price}€`;

const updateTotalPrice = (event) => {
    quantity = Number(inputQuantity.value);
    totalPrice = product.price * quantity;
    totalPriceDisplay.textContent = `Total Price: ${totalPrice}€`;
    product.quantity = quantity;             // update the quantity property
    product.totalPrice = totalPrice;         // add new property 'totalPrice' and update the value
    inputQuantity.value = '';
    console.log(product);
}

addButton.addEventListener('click', updateTotalPrice)


