console.log('Script is connected');

const inputDeposit = document.querySelector('#depositBox');
const inputWithdraw = document.querySelector('#withdrawBox');
const depositButton = document.querySelector('#depositBtn');
const withdrawButton = document.querySelector('#withdrawBtn');
const balance = document.querySelector('#balance');
const message = document.querySelector('#message');
const messageFrontPage = document.querySelector('#message-frontpage')

const inputPin = document.querySelector('#pin');
const enterBtn = document.querySelector('#pinBtn');
const overlay = document.querySelector('.overlay');
const exitBtn = document.querySelector('#exit')

let currentBalance = 0;

depositButton.addEventListener('click', () => {
    depositAmount = parseFloat(inputDeposit.value); // also write "+depositAmount.value" -- to change into number data type
    deposit(depositAmount);
    updateBalance();
    inputDeposit.value = '';
});

withdrawButton.addEventListener('click', () => {
    withdrawAmount = parseFloat(inputWithdraw.value);
    withdraw(withdrawAmount);
    updateBalance();
    inputWithdraw.value = '';

});

function updateBalance() {
    balance.innerText = currentBalance;
}

function deposit(depositAmount) {

    if (isNaN(depositAmount) || depositAmount <= 0) {
        message.innerText = 'Please enter a valid number'
        message.style.color = 'red'
    } else {
        currentBalance += depositAmount;
        message.innerText = `Deposited ${depositAmount.toFixed(2)} € successfully`;
        message.style.color = 'green'

    }
}

function withdraw(withdrawAmount) {

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        message.innerText = 'Please enter a valid number'
        message.style.color = 'red';
    } else if (withdrawAmount > currentBalance) {
        message.innerText = 'Insufficient balance'
        message.style.color = 'red';
    } else {
        currentBalance -= withdrawAmount;
        message.innerText = `Withdrew ${withdrawAmount.toFixed(2)} € successfully`;
        message.style.color = 'green'
    }
}

function getPin() {
    const pinNumber = Number(inputPin.value);
    validatePin(pinNumber);
    inputPin.value = '';
}
enterBtn.addEventListener('click', getPin);

const exitOverlay = () => {
    overlay.classList.toggle('hidden');
    balance.classList.toggle('balance');

}
exitBtn.addEventListener('click', exitOverlay);


function validatePin(pinNumber) {
    if (pinNumber === 1234) {
        message.innerText = 'Welcome, You can access your account'
        message.style.color = '0D8C55';
        overlay.classList.toggle('hidden');


    } else if (pinNumber == '') {
        messageFrontPage.innerText = 'Please enter the pin number'
        messageFrontPage.style.color = 'red';
    } else {
        messageFrontPage.innerText = 'Incorrect Password, try again'
        messageFrontPage.style.color = 'red';
    }
}