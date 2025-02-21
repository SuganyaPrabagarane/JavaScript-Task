const form = document.querySelector('#pancakeForm');
const pancakeType = document.querySelector('#type');
const customerName = document.querySelector('#customerName');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const deliveryMethod = document.querySelectorAll('.delivery');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const orderButton = document.querySelector('#seeOrder');
const orderSummary = document.querySelector('#summaryText');
const totalPriceBanner = document.querySelector('#totalPrice');


const calculateTotal = () => {
    let totalPrice = parseFloat(pancakeType.value);
    
    toppings.forEach(topping => {
        if(topping.checked){
            totalPrice += parseFloat(topping.value);
        }
    });

    extras.forEach(extra => {
        if(extra.checked){
            totalPrice += parseFloat(extra.value);
        }
    });
    

    totalPriceDisplay.textContent = `${totalPrice}€`;
    totalPriceBanner.textContent = `${totalPrice}€`;
}

form.addEventListener('change',calculateTotal);




