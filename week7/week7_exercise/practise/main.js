const form = document.querySelector("#pancakeForm");
const pancakeType = document.querySelector("#type");
const nameInput = document.querySelector("#customerName");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const orderButton = document.querySelector("#seeOrder");
const summary = document.querySelector("#summaryText");
const totalPriceBanner = document.querySelector("#totalPrice");

const confirmOrder = document.querySelector("#confirmOrder");
const checkOrderButton = document.querySelector("#checkOrder");

const changeHandler = (event) => {
    const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

    const toppingsTotal = [
        ...document.querySelectorAll(".topping:checked"),
    ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

    const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
        (sum, extra) => sum + parseFloat(extra.dataset.price), 0);

    let deliveryPrice = 0;
    const deliveryMethod = document.querySelector(".delivery:checked");
    if (deliveryMethod) {
        deliveryPrice = parseFloat(deliveryMethod.dataset.price);
    }

    let totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryPrice;

    totalPriceBanner.textContent = `${totalPrice}€`;
    totalPriceDisplay.textContent = `${totalPrice}€`;
};
form.addEventListener("change", changeHandler);

const orderSummary = () => {
    const customerName = (nameInput.value).toLowerCase().trim();
    const deliveryMethod = document.querySelector(".delivery:checked");

    const toppingItem = [...document.querySelectorAll(".topping:checked")].map(
        (item) => item.value
    );

    const extraItem = [...document.querySelectorAll(".extra:checked")].map(
        (item) => item.value
    );

    summary.textContent = ` Name: ${customerName}, \n Pancake Type: ${pancakeType.value},\n  Toppings: ${toppingItem},\n Extras: ${extraItem}, \n Delivery Method: ${deliveryMethod.value}`;

    const orderConfirmation = () => {
        alert('Order is confirmed')
        const orders = JSON.parse(localStorage.getItem("pancakeOrder")) || [];

        let id = Date.now();
        let status = "Waiting";

        class Orders {
            constructor(id, customerName, selectedPancake, topping, extras, deliveryMethod, totalPrice, status) {
                this.id = id;
                this.customerName = customerName;
                this.selectedPancake = selectedPancake;
                this.topping = topping;
                this.extras = extras;
                this.deliveryMethod = deliveryMethod;
                this.totalPrice = totalPrice;
                this.status = status;
                this.showInfo = function () {
                    return `Id: ${this.id},\nName: ${this.customerName},\nPancake: ${this.selectedPancake},\nTopping: ${this.topping},\nExtras: ${this.extras},\nDeliveryMethod: ${this.deliveryMethod},\nTotalPrice: ${this.totalPrice},\nStatus: ${this.status}`;
                };
            }
        }

        const newOrder = new Orders(id, customerName, pancakeType.value, toppingItem, extraItem, deliveryMethod.value, totalPriceDisplay.textContent, status);

        summary.textContent = newOrder.showInfo();
        orders.push(newOrder);
        //let orderReceipt = orders.join('\n');

        const ordersJSON = JSON.stringify(orders);
        localStorage.setItem("pancakeOrder", ordersJSON);
    };
    confirmOrder.addEventListener("click", orderConfirmation);
};
orderButton.addEventListener("click", orderSummary);

const checkOrderList = () => {
    //window.location.href = 'order.html'
};
checkOrderButton.addEventListener("click", checkOrderList);
