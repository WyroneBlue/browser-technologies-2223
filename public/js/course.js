const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input');

const errors = {
    'teacher': 'Please select a teacher',
    'startdate': 'Please select a start date',
    'rating': 'Please pick a rating',
}

const displayError = (text, message) => {
    text.classList.add('show-error');
    text.textContent = message;
}

const showTextError = (input, message) => {
    if (!input.value) {
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
        const text = parent.querySelector('p');
        displayError(text, message);
        return false;
    } else {
        return true;
    }
}


submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    let validations = {
        'teacher': false,
        'startdate': false,
        'level': false,
        'explanation': false,
        'insight': false,
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const course = data.course;

    const teacher = document.querySelector(`#${course}-teacher`);
    validations.teacher = showTextError(teacher, errors.teacher);

    const startdate = document.querySelector(`#${course}-startdate`);
    validations.startdate = showTextError(startdate, errors.startdate);

    const level = document.querySelector(`[name="${course}-level"]`);
    const explanation = document.querySelector(`[name="${course}-explanation"]`);
    const insight = document.querySelector(`[name="${course}-insight"]`);

    validations.level = showRadioError(level, errors.rating);
    validations.explanation = showRadioError(explanation, errors.rating);
    validations.insight = showRadioError(insight, errors.rating);

    const formValidated = Object.keys(validations).every(value => validations[ value ]);

    if (formValidated) {
        form.submit();
    }
});

inputs.forEach(input => {
    input.addEventListener('input', (e) => {

        let text;
        const target = e.target;
        const parent = target.parentNode;

        if (target.type === 'text' || target.type === 'date' || target.type === 'email') {
            text = parent.querySelector('p');
        }

        if (target.type === 'radio') {
            text = parent.parentNode.querySelector('p');
        }

        text.classList.remove('show-error');
    });
});