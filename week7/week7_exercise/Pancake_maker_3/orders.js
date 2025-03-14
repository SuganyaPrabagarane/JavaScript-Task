const displayOrderList = document.querySelector("#orderlist");
const backButtonOrderPage = document.querySelector("#back");
const displayOrder = document.querySelector('.orders');
const searchInput = document.querySelector('#searchBox')
const removeButton = document.createElement('button');

const returnedOrders = localStorage.getItem("pancakeOrder");
const ordersObject = JSON.parse(returnedOrders);

function createDropDownList(parentElement) {

    const statusPara = document.createElement('p');
    statusPara.classList.add('orderStatus-para'); // adding class name to 'p' element
    statusPara.textContent = 'Status:'
    parentElement.appendChild(statusPara);

    const statusListBox = document.createElement('select');
    statusListBox.classList.add('select-status') // adding class name to 'Select' element
    statusListBox.id = ("status-select")
    //statusListBox.value = orderStatus
    parentElement.appendChild(statusListBox);
    const optionsOfStatus = ['Waiting', 'Ready', 'Delivered'];

    for (const option of optionsOfStatus) {
        const dropDownList = document.createElement('option');
        dropDownList.text = option;
        statusListBox.appendChild(dropDownList);
    }

    return statusListBox;

}


function createRemoveButton(parentElement) {
    const removeButtons = document.createElement('button');
    removeButtons.classList.add('removeBtn');  // adding class name to 'Button'
    removeButtons.textContent = 'Remove';
    parentElement.appendChild(removeButtons);
    return removeButtons;
}

const displayOrdersOnPage = (ordersObject) => {

    displayOrderList.innerHTML = '';
    ordersObject.forEach((order) => {
        const orderList = document.createElement('li');

        const statusValue = createDropDownList(orderList);

        const status = document.createElement('p');
        const id = document.createElement("p");
        const customerName = document.createElement("p");
        const pancakeType = document.createElement("p");
        const toppings = document.createElement("p");
        const extras = document.createElement("p");
        const deliveryMethod = document.createElement("p");
        const totalPrice = document.createElement("p");

        status.textContent = `Status: ${order.status}`;
        status.dataset.id = order.id
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

        const removeBtn = createRemoveButton(orderList);
        const removeOrder = () => {
            console.log('Order id is:', order.id);
            const filteredOrders = ordersObject.filter(o => o.id !== order.id)
            orderList.remove();
            console.log(filteredOrders)
            localStorage.setItem('pancakeOrder', JSON.stringify(filteredOrders));

        }
        removeBtn.addEventListener('click', removeOrder)

        const changeStatus = () => {

            if (statusValue.value === 'Delivered') {
                order.status = 'Delivered';
                // console.log('status style is', status.style.backgroundColor);
                // status.style.backgroundColor = 'red';
                // status.style.color = 'red';
                // console.log('status style is', status.style.color);
            }
            else if (statusValue.value === 'Ready') {
                order.status = 'Ready'
                const option = document.getElementById("Ready")
                // option.selected = true;
            }
            else {
                order.status = 'Waiting'
                const option = document.getElementById("Waiting")
                // option.selected = true;
            }

            displayOrdersOnPage(ordersObject);
        }
        statusValue.addEventListener('change', changeStatus)

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





const backToPancakePage = () => {
    console.log("event triggered");
    window.location.href = "index.html";
};
backButtonOrderPage.addEventListener("click", backToPancakePage);


displayOrdersOnPage(ordersObject);


