console.log('Wagwan World');

import FormHandler from './save-form.js';
import Rating from './rating.js';

const form = document.querySelector('form');
const submitButtons = document.querySelectorAll('button[type="submit"]');
const start = document.getElementById('user-info');
const stepTwo = document.querySelector('form section:nth-of-type(2)');
const stepThree = document.querySelector('form section:nth-of-type(3)');
const stepFour = document.querySelector('form section:nth-of-type(4)');
const stepFive = document.querySelector('form section:nth-of-type(5)');
const stepSix = document.querySelector('form section:nth-of-type(6)');

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