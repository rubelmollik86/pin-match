function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('get three digit and call agin',pin)
        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const priviousNumber = calcInput.value;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const genaratedPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-numbers').value;
    const successMessage = document.getElementById('verify-success');
    const failError = document.getElementById('vefify-faild');
    if (genaratedPin == typeNumber) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {

        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
};