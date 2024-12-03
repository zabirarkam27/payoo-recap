document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const currentBalance = getInnerTextById('current-balance');
    const addAmount = getInputFieldValueById('add-amount');
    const pinNumber = getInputFieldValueById('pin-number');

    const newBalance = currentBalance + addAmount;

    if(isNaN(addAmount)){
        alert('Failed to add money.');
        return;
    }

    if (pinNumber === 1234) {
        document.getElementById('add-amount').value = '';
        document.getElementById('pin-number').value = '';

        document.getElementById('current-balance').innerText = newBalance;


        // add to transaction History
        const div = document.createElement('div');
        div.innerHTML = `
            <div class = "bg-gray-300 mb-2 p-2 rounded-md">
                <h4 class = "text-lg font-bold mb-2">Add Money</h4>
                <p>Added: ${addAmount} Tk. New Balance: ${newBalance} Tk</p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else {
        alert('Please Enter Valid PIN.');
    }

})