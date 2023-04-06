console.log('Wagwan World');

const form = document.querySelector('form');
const styles = document.querySelector("link[href='/css/app.css']");
const cssLoaded = () => Boolean(styles.sheet);

const displayError = (text, message) => {
    console.log(text);
    text.classList.add('show-error');
    text.textContent = message;
}

export const showTextError = (input, message) => {
    if (!input.value || !input.checkValidity()) {
        const text = input.parentNode.querySelector('p');
        displayError(text, message);

        return false;
    } else {
        return true;
    }
}

export const addChecksToForm = () => {

    if (cssLoaded()){
        const spans = document.querySelectorAll('span');
        spans.forEach(span => {
            span.textContent = '✅';
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    form.classList.remove('no-js');
});