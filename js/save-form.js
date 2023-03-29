const urlParams = new URLSearchParams(window.location.search);
const getParam = (param) => {
    return urlParams.get(param);
}

export default {

    init() {
        this.stepOne();
        this.stepTwo();
        this.stepThree();
    },

    stepOne () {
        const userInfo = {
            name: getParam('name'),
            email: getParam('email'),
            age: getParam('age'),
        }

        this.getSavedValues(userInfo, 'user-info');
    },

    stepTwo() {
        this.courseTemplate('wafs');
    },

    stepThree() {
        this.courseTemplate('css');
    },

    courseTemplate(course) {
        const data = {
            'teacher': getParam(`${course}-teacher`) || '',
            'startdate': getParam(`${course}-startdate`) || '',
            'enddate': getParam(`${course}-enddate`) || '',
            'rating': getParam(`${course}-rating`) || '',
            'level': getParam(`${course}-level`) || '',
            'explanation': getParam(`${course}-explanation`) || '',
            'insight': getParam(`${course}-insight`) || '',
        }


        let courseData = {}
        Object.keys(data).map(key => {
            if(data[key] !== ''){
                courseData[`${course}-${key}`] = data[key];
            }
        })
        console.log(courseData);

        this.getSavedValues(courseData, course);
    },

    getSavedValues(savedValues, course) {

        const stepOneInputs = document.querySelector(`#${course}`).querySelectorAll([`select`, `input`]);
        console.log(stepOneInputs);
        stepOneInputs.forEach(input => {

            if(input.name.includes('rating')) {
                console.log(input.value);
                console.log(savedValues[input.name]);

                if(input.value == savedValues[input.name]){
                    console.log('match');
                    input.checked = true;
                }
            } else {
                input.value = savedValues[input.name];
            }
        });
    },

    saveValues() {
        const form = document.querySelector('form');
        console.dir(form);

        // get input values
        const inputs = form.querySelectorAll('input');
        console.log(inputs);

    }
}
