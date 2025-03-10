const displayOrderList = document.querySelector('.orders')
const backButtonOrderPage = document.querySelector('#back');

const status = document.querySelectorAll('#status');
const id = document.querySelector('#id');
const customerName = document.querySelector('#name');
const pancakeType = document.querySelector('#pancake');
const toppings = document.querySelector('#toppings');
const extras = document.querySelector('#extras');
const deliveryMethod = document.querySelector('#delivery');
const totalPrice = document.querySelector('#total-price');


const returnedOrders = localStorage.getItem('pancakeOrder');
const ordersObject = JSON.parse(returnedOrders);

const displayOrders = () => {
    console.log(ordersObject);

    ordersObject.forEach(order => {

        // const status = document.createElement('p');
        // const id = document.createElement('p');
        // const customerName = document.createElement('p');
        // const pancakeType = document.createElement('p');
        // const toppings = document.createElement('p');
        // const extras = document.createElement('p');
        // const deliveryMethod = document.createElement('p');
        // const totalPrice = document.createElement('p');

        status.textContent = `Status:${order.status}`;
        id.textContent = `Id:${order.id}`;
        customerName.textContent = `Customer Name:${order.customerName}`;
        pancakeType.textContent = `Pancake Type:${order.selectedPancake}`;
        toppings.textContent = `Toppings:${order.topping}`;
        extras.textContent = `Extras:${order.extras}`;
        deliveryMethod.textContent = `Delivery Method:${order.deliveryMethod}`;
        totalPrice.textContent = `Total Price:${order.totalPrice}`;

        // displayOrderList.appendChild(status);
        // displayOrderList.appendChild(id);
        // displayOrderList.appendChild(customerName);
        // displayOrderList.appendChild(pancakeType);
        // displayOrderList.appendChild(toppings);
        // displayOrderList.appendChild(extras);
        // displayOrderList.appendChild(deliveryMethod);
        // displayOrderList.appendChild(totalPrice);

    });
}
displayOrders();







const backToPancakePage = () => {
    console.log('event triggered')
    window.location.href = 'index.html'

}

backButtonOrderPage.addEventListener('click', backToPancakePage)