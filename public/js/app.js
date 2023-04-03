console.log('Wagwan World');

const form = document.querySelector('form');

const displayError = (text, message) => {
    console.log(text);
    text.classList.add('show-error');
    text.textContent = message;
}

export const showTextError = (input, message) => {
    console.log(input);
    console.log(!input.value);
    if (!input.value || !input.checkValidity()) {
        console.log('no input');
        const text = input.parentNode.querySelector('p');
        displayError(text, message);

        return false;
    } else {
        return true;
    }
}

const showRadioError = (input, message) => {
    const parent = input.parentNode.parentNode;
    const checkedItems = parent.querySelectorAll('input:checked');

    if (checkedItems.length < 1) {
        console.log('no input');
        const text = parent.querySelector('p');
        displayError(text, message);
        return false;
    } else {
        return true;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    form.classList.remove('no-js');
});