const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if(password.value.length <= 6){
        messages.push('password must be longet than 6')
    }
    if(password.value.length <= 20){
        messages.push('the password is too long')
    }

    if(password.value === 'password'){
        messages.push('password can not be password')
    }

    if (name.value === '' || name.value === null) {
        messages.push('name is required');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
