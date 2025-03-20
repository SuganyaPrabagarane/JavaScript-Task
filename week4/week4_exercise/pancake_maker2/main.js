const form = document.querySelector('#pancakeForm');
const pancakeType = document.querySelector('#type');
const customerName = document.querySelector('#customerName');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const orderButton = document.querySelector('#seeOrder');
const summary = document.querySelector('#summaryText');
const totalPriceBanner = document.querySelector('#totalPrice');


const changeHandler = (event) =>{
    //console.log('Event:', event);
   
    const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);
    
    console.log('Base Price:', basePrice);

    const toppingsTotal =[...document.querySelectorAll('.topping:checked')].reduce((sum,topping)=> sum + parseFloat(topping.dataset.price), 0);
    console.log('Toppings total:', toppingsTotal);

    const extrasTotal =[...document.querySelectorAll('.extra:checked')].reduce((sum,extra)=> sum + parseFloat(extra.dataset.price), 0);

    console.log('Extras total:', extrasTotal);

    let deliveryPrice = 0;
    const deliveryMethod = document.querySelector('.delivery:checked');
    if(deliveryMethod){
         deliveryPrice = parseFloat(deliveryMethod.dataset.price);
    }
    console.log('Delievry value:',deliveryPrice)

    let totalPrice = basePrice +toppingsTotal + extrasTotal + deliveryPrice;

    totalPriceBanner.textContent =`${totalPrice}€`;
    totalPriceDisplay.textContent =`${totalPrice}€`;
}
form.addEventListener('change',changeHandler);


const orderSummary =()=>{
    console.log('Button clicked');

    const checkboxes = document.querySelectorAll('.topping:checked');
    const deliveryMethod = document.querySelector('.delivery:checked');
    const extras = document.querySelectorAll('.extra:checked');
    const pancakeType = document.querySelector('#type');
    let toppingResult, extraResult;
    let toppings = [];
    let extra = [];
   
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppingResult = checkboxes[i].value;
            toppings.push(toppingResult);
            //console.log(`selected check box data: ${toppingResult}`);
        }
    }
    for (let i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
              extraResult = extras[i].value;
              extra.push(extraResult);
             //console.log(`selected check box data: ${extraResult}`);
        }
    }
    summary.textContent = `Name: ${customerName.value}, Pancake Type: ${pancakeType.selectedOptions[0].textContent}, Selected Toppings: ${toppings}, Added extra item : ${extra}, selected delivery: ${deliveryMethod.parentElement.textContent}` ;


}

orderButton.addEventListener('click',orderSummary)




