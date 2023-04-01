// console.log('rating');
const inputs = document.querySelectorAll('fieldset label');

export default {
    init() {

        inputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const item = e.target;
                const parent = item.parentNode;
                const id = item.closest('section').id;
                const name = item.getAttribute('name');
                this.resetRatings(id, name);
                parent.classList.add('selected');
            });
        });
    },

    resetRatings(id, name) {
        inputs.forEach(input => {
            if (input.closest('section').id === id && input.getAttribute('name') === name) {
                input.classList.remove('selected');
            }
        });
    }
}