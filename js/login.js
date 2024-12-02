document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNo = document.getElementById('mobile-no').value;
    const pinNo = document.getElementById('pin-no').value;

    if (mobileNo === '01756866725' && pinNo === '1234') {
        document.getElementById('mobile-no').value = '';
        document.getElementById('pin-no').value = '';

        window.location.href = '../home.html';
    }
    else {
        alert('Invalid mobile number or PIN. Please try again.')
    }
})