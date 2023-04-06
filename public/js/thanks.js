let counter = 5;
const msg = document.querySelector('span');
const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
    body.classList.remove('no-js');
    msg.textContent = counter;
});

const interval = setInterval(() => {
    counter--;
    updateCount(counter);

    if (counter === 0) {
        redirect();
        clearInterval(interval);
    }
}, 1000);

function updateCount(count) {
    msg.textContent = count;
}

function redirect() {
    window.location.href = '/';
}