console.log('Script is connected');

const inputDeposit = document.querySelector('#depositBox');
const inputWithdraw = document.querySelector('#withdrawBox');
const depositButton = document.querySelector('#depositBtn');
const withdrawButton = document.querySelector('#withdrawBtn');
const balance = document.querySelector('#balance');
const message = document.querySelector('#message');

const inputPin = document.querySelector('#pin');
const enterBtn = document.querySelector('#pinBtn');

let currentBalance = 0;


depositButton.addEventListener('click',() => {
    depositAmount = Number(inputDeposit.value); // also write "+deposit.value" -- to change into number data type
    deposit(depositAmount);
    balance.innerText = currentBalance;
    inputDeposit.value='';
});

withdrawButton.addEventListener('click',() => {
     withdrawAmount = Number(inputWithdraw.value);
     withdraw(withdrawAmount);
    balance.innerText = currentBalance;
    inputWithdraw.value='';

});

function checkBalance() {
    return currentBalance;
}

function deposit(depositAmount){
    
    if (typeof depositAmount !== 'number'){
        message.innerText = 'Please enter a valid number';
        message.style.color = 'red';
    } else if(depositAmount <= 0){
        message.innerText = 'Please enter a valid amount';
        message.style.color = 'red';
    } else {
        currentBalance += depositAmount;
        message.innerText = 'Amount depositted to the account successfully.'
        message.style.color = '0D8C55';
    }
}

function withdraw(withdrawAmount) {
    // message.innerText = 'please enter the pin number';
    // validatePin(pinNumber);
    if (typeof withdrawAmount !== 'number'){
        message.innerText = 'Please enter a valid number';
        message.style.color = 'red';
    } else if(withdrawAmount <= 0){
        message.innerText = 'Please enter a valid amount';
        message.style.color = 'red';
    } else if(withdrawAmount > currentBalance){
        message.innerText = 'Insufficient Funds.'
        message.style.color = 'red';
    }else {
        currentBalance -= withdrawAmount;
        message.innerText = 'Amount withdraw successfully.'
        message.style.color = '0D8C55';
    }
}

function getPin(){
    const pinNumber = Number(inputPin.value);
    validatePin(pinNumber);
    inputPin.value='';
}
enterBtn.addEventListener('click',getPin);


function validatePin(pinNumber) {
    if (pinNumber === 1234){
        message.innerText = 'Welcome, You can access your account'
        message.style.color = '0D8C55';
    } else if(pinNumber == ''){
        message.innerText = 'Please enter the pin number'
        message.style.color = 'red';
    } else{
        message.innerText = 'Incorrect Password, try again'
        message.style.color = 'red';
    }
}