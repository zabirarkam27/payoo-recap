document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    // const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const currentBalance = getInnerTextById('current-balance');
    const cashOutAmount = getInputFieldValueById('cash-out');
    const pinNumber = getInputFieldValueById('pin-no');

    const newBalance = currentBalance - cashOutAmount;

    if (pinNumber === 1234) {
        document.getElementById('cash-out').value = '';
        document.getElementById('pin-no').value = '';

        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Please Enter Valid PIN');
    }
})