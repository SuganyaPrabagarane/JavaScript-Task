const displayOrderList = document.querySelector("#orderlist");
const backButtonOrderPage = document.querySelector("#back");
const searchInput = document.querySelector('#searchBox')
const removeButton = document.createElement('button');
const filterOrderByStatus = document.querySelector('#filter');
const sortOrderButton = document.querySelector('#sortBtn');

const returnedOrders = localStorage.getItem("pancakeOrder");
const ordersObject = JSON.parse(returnedOrders);

function createRemoveButton(parentElement) {
    const removeButtons = document.createElement('button');
    removeButtons.classList.add('removeBtn');  // adding class name to 'Button'
    removeButtons.textContent = 'Remove';
    parentElement.appendChild(removeButtons);
    return removeButtons;
}

function createDropDownList(parentElement) {
    const statusPara = document.createElement('p');
    statusPara.classList.add('orderStatus-para'); // adding class name to 'p' element
    statusPara.textContent = 'Status:'
    parentElement.appendChild(statusPara);

    const dropDownList = document.createElement('select');
    dropDownList.classList.add('select-dropdownlist');
    parentElement.appendChild(dropDownList);
    dropDownList.style.backgroundColor = '#F8E870';
    const optionNode = ['Waiting', 'Ready', 'Delivered'];

    for (const option of optionNode) {
        const node = document.createElement('option');
        node.text = option;
        // dropDownList.add(node);
        dropDownList.appendChild(node);

        // if (node.text == 'Ready') { dropDownList.style.backgroundColor = 'blue' }
        // if (node.text == 'Delivered') { dropDownList.style.backgroundColor = 'green' }
    }

    return dropDownList;

}



const displayOrdersOnPage = (ordersObject) => {

    displayOrderList.innerHTML = '';

    ordersObject.forEach((order) => {

        const orderList = document.createElement('li');
        orderList.classList.add('list-color');

        const statusDropDownList = createDropDownList(orderList);
        const orderBgColor = document.querySelector('.list-color');
        //changeBgColorByStatus(orderBgColor, order);



        const status = document.createElement('p');
        const id = document.createElement("p");
        const customerName = document.createElement("p");
        const pancakeType = document.createElement("p");
        const toppings = document.createElement("p");
        const extras = document.createElement("p");
        const deliveryMethod = document.createElement("p");
        const totalPrice = document.createElement("p");

        status.textContent = `Status: ${order.status}`;
        id.textContent = `Id:${order.id}`;
        customerName.textContent = `Customer Name:${order.customerName}`;
        pancakeType.textContent = `Pancake Type:${order.selectedPancake}`;
        toppings.textContent = `Toppings:${order.topping}`;
        extras.textContent = `Extras:${order.extras}`;
        deliveryMethod.textContent = `Delivery Method:${order.deliveryMethod}`;
        totalPrice.textContent = `Total Price:${order.totalPrice}`;

        orderList.appendChild(status)
        orderList.appendChild(id);
        orderList.appendChild(customerName);
        orderList.appendChild(pancakeType);
        orderList.appendChild(toppings);
        orderList.appendChild(extras);
        orderList.appendChild(deliveryMethod);
        orderList.appendChild(totalPrice);
        displayOrderList.appendChild(orderList);

        status.classList.add('order-status');



        const removeBtn = createRemoveButton(orderList);

        const removeOrder = () => {
            console.log('Order id is:', order.id);
            const filteredOrders = ordersObject.filter(o => o.id !== order.id)
            orderList.remove();
            console.log(filteredOrders);
            localStorage.setItem('pancakeOrder', JSON.stringify(filteredOrders));

        }
        removeBtn.addEventListener('click', removeOrder)


        const changeOrderStatus = () => {

            if (statusDropDownList.value === 'Ready') {
                order.status = 'Ready';
                status.textContent = `Status: ${order.status}`;
                // statusDropDownList.style.backgroundColor = 'lightblue';
                orderList.style.color = 'blue';

            } else if (statusDropDownList.value === 'Delivered') {
                order.status = 'Delivered';
                status.textContent = `Status: ${order.status}`;
                // statusDropDownList.style.backgroundColor = 'lightgreen';
                orderList.style.color = 'darkgreen';
            } else {
                order.status = 'Waiting';
                status.textContent = `Status: ${order.status}`;
                // statusDropDownList.style.backgroundColor = 'yellow';
                orderList.style.color = 'yellow';
            }

            localStorage.setItem('pancakeOrder', JSON.stringify(ordersObject));

        }
        statusDropDownList.addEventListener('change', changeOrderStatus)

    });

}

const searchOrder = () => {
    console.log('triggered')
    const searchByName = searchInput.value.toLowerCase().trim();
    const searchById = Number(searchInput.value);
    const filteredOrdersByName = ordersObject.filter(order => order.customerName.includes(searchByName) || (order.id == searchById));
    displayOrdersOnPage(filteredOrdersByName);
    searchByName.value = '';
}
searchInput.addEventListener('change', searchOrder);

const filterOrders = () => {
    console.log('event triggered');
    const selectedStatus = filterOrderByStatus.value;
    console.log('selected status', selectedStatus);
    if (selectedStatus === 'All') {
        displayOrdersOnPage(ordersObject);
    }
    else {
        const filteredOrder = ordersObject.filter(order => order.status === selectedStatus)
        displayOrdersOnPage(filteredOrder);
    }
}
filterOrderByStatus.addEventListener('change', filterOrders)


const sortOrderByStatus = () => {
    console.log('Event triggered')
    const status = ['Waiting', 'Ready', 'Delivered']
    ordersObject.sort((a, b) => {
        return status.indexOf(a.status) - status.indexOf(b.status);
    });
    console.log(ordersObject);
    displayOrdersOnPage(ordersObject);

}
sortOrderButton.addEventListener('click', sortOrderByStatus)

// const changeColorByStatus = () => {
//     const orderColorByStatus = document.querySelector('.')
// }

const backToPancakePage = () => {
    console.log("event triggered");
    window.location.href = "index.html";
};
backButtonOrderPage.addEventListener("click", backToPancakePage);



displayOrdersOnPage(ordersObject);