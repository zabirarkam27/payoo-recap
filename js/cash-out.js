document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    // const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    const currentBalance = getInnerTextById('current-balance');
    const cashOutAmount = getInputFieldValueById('cash-out');
    const pinNumber = getInputFieldValueById('pin-no');

    const newBalance = currentBalance - cashOutAmount;

    if(isNaN(cashOutAmount)){
        alert('Failed to Cash Out');
        return;
    }

    if (pinNumber === 1234) {
        document.getElementById('cash-out').value = '';
        document.getElementById('pin-no').value = '';


        if(cashOutAmount > currentBalance){
            alert('You do not have enough money to cash out.');
            return;
        }

        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction History
        const div = document.createElement('div');
        div.innerHTML = `
            <div class = "bg-gray-300 mb-2 p-2 rounded-md">
                <h4 class = "text-lg font-bold mb-2">Cash Out</h4>
                <p>${cashOutAmount} Withdraw. New Balance: ${newBalance}</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Please Enter Valid PIN');
    }
})