const displayOrderList = document.querySelector("#orderlist");
const backButtonOrderPage = document.querySelector("#back");
const searchInput = document.querySelector('#searchBox')
const removeButton = document.createElement('button');
const filter = document.querySelector('#filter');
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
    dropDownList.classList.add('select-status') // adding class name to 'Select' element
    //dropDownList.id = ("status-select");
    parentElement.appendChild(dropDownList);
    const optionsOfStatus = ['', 'Waiting', 'Ready', 'Delivered'];

    for (const option of optionsOfStatus) {
        const nodeList = document.createElement('option');
        nodeList.text = option;
        dropDownList.appendChild(nodeList);
    }

    return dropDownList;
}


const displayOrdersOnPage = (ordersObject) => {

    displayOrderList.innerHTML = '';

    ordersObject.forEach((order) => {
        const orderList = document.createElement('li');

        const statusDropDownList = createDropDownList(orderList);

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

        status.classList.add('status') // Adding class name


        const removeBtn = createRemoveButton(orderList);
        const removeOrder = () => {
            console.log('Order id is:', order.id);
            const filteredOrders = ordersObject.filter(o => o.id !== order.id)
            orderList.remove();
            console.log(filteredOrders)
            localStorage.setItem('pancakeOrder', JSON.stringify(filteredOrders));

        }
        removeBtn.addEventListener('click', removeOrder)

        const changeOrderStatus = () => {


            if (statusDropDownList.value === 'Ready') {
                order.status = 'Ready';
                console.log('order status is:', order.status)
            }
            else if (statusDropDownList.value === 'Delivered') {
                order.status = 'Delivered';
            }
            else {
                order.status = 'Waiting';
            }

            localStorage.setItem('pancakeOrder', JSON.stringify(ordersObject));

            displayOrdersOnPage(ordersObject);

        }

        statusDropDownList.addEventListener('change', changeOrderStatus)


    });
};



const searchOrderByName = () => {
    console.log('triggered')
    const searchByName = searchInput.value.toLowerCase().trim();
    const searchById = Number(searchInput.value);
    const filteredOrdersByName = ordersObject.filter(order => order.customerName.includes(searchByName) || (order.id == searchById));
    displayOrdersOnPage(filteredOrdersByName);
    searchByName.value = '';
}
searchInput.addEventListener('change', searchOrderByName);

const filterOrders = () => {
    console.log('event triggered');
    const selectedStatus = filter.value;
    console.log('selected status', selectedStatus);
    if (selectedStatus === 'All') {
        displayOrdersOnPage(ordersObject);
    }
    else {
        const filteredOrder = ordersObject.filter(order => order.status === selectedStatus)
        displayOrdersOnPage(filteredOrder);
    }
}
filter.addEventListener('change', filterOrders)


const backToPancakePage = () => {
    console.log("event triggered");
    window.location.href = "index.html";
};
backButtonOrderPage.addEventListener("click", backToPancakePage);

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


displayOrdersOnPage(ordersObject);

