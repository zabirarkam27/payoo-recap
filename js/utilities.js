function getInputFieldValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}


function showSectionById(id) {
    // Hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history-form').classList.add('hidden');

    // show the section with provided ID as parameter
    document.getElementById(id).classList.remove('hidden');
}
