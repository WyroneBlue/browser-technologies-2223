console.log('Wagwan World');

import FormHandler from './save-form.js';

const form = document.querySelector('form');
const submitButtons = document.querySelectorAll('button[type="submit"]');
const start = document.getElementById('user-info');
const stepTwo = document.querySelector('form section:nth-of-type(2)');
const stepThree = document.querySelector('form section:nth-of-type(3)');


window.addEventListener('DOMContentLoaded', () => {
    form.classList.remove('no-js');

    stepTwo.classList.add('hide-step');
    stepThree.classList.add('hide-step');
});

submitButtons.forEach(button => {

    button.addEventListener('click', (e) => {
        e.preventDefault();

        console.dir(form);
        const step = e.target.dataset.step;
        form.action = `#${step}`;
        FormHandler.saveValues();
        form.submit();
    });
});

FormHandler.init();