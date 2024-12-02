document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const currentBalance = getInnerTextById('current-balance');
    const addAmount = getInputFieldValueById('add-amount');
    const pinNumber = getInputFieldValueById('pin-number');

    const newBalance = currentBalance + addAmount;

    if (pinNumber === 1234) {
        document.getElementById('add-amount').value = '';
        document.getElementById('pin-number').value = '';

        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Please Enter Valid PIN.');
    }

})