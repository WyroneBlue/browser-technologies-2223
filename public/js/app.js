console.log('Wagwan World');

import FormHandler from './save-form.js';
import Rating from './rating.js';

const form = document.querySelector('form');
const submitButtons = document.querySelectorAll('button[type="submit"]');

window.addEventListener('DOMContentLoaded', () => {
    form.classList.remove('no-js');

    stepTwo.classList.add('hide-step');
    stepThree.classList.add('hide-step');
    stepFour.classList.add('hide-step');
    stepFive.classList.add('hide-step');
    stepSix.classList.add('hide-step');
});

submitButtons.forEach(button => {

    button.addEventListener('click', async(e) => {
        e.preventDefault();

        const step = e.target.dataset.step;
        form.action = `#${step}`;

        form.submit();
    });
});

FormHandler.init();
Rating.init();