import { showTextError, addChecksToForm } from './app.js';

const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input');

const errors = {
    'name': 'Please enter your name',
    'email': 'Please enter a valid email',
    'number': 'Please enter a valid student number',
}

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const validations = {
        name: false,
        email: false,
        number: false,
    };

    const name = document.getElementById("name");
    validations.name =  showTextError(name, errors.name);

    const email = document.getElementById("email");
    validations.email =  showTextError(email, errors.email);

    const number = document.getElementById("number");
    validations.number =  showTextError(number, errors.number);

    const formValidated = Object.keys(validations).every(value => validations[value]);
    if (formValidated) {
        console.log('form validated');
        form.submit();
    }
});

window.addEventListener('DOMContentLoaded', addChecksToForm);

inputs.forEach(input => {
    input.addEventListener('input', (e) => {

        const target = e.target;
        const parent = target.parentNode;
        const text = parent.querySelector('p');
        text.classList.remove('show-error');
    });
});