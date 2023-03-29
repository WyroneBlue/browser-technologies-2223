const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);

const getParam = (param) => {
    return urlParams.get(param);
}

export default {

    init() {

        this.getProgress();

        this.stepOne();
        this.stepTwo();
        this.stepThree();
        this.stepFour();
        this.stepFive();
        this.stepSix();

        localStorage.setItem('progress_fetched', 'false');
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

    stepFour() {
        this.courseTemplate('pw-one');
    },

    stepFive() {
        this.courseTemplate('pwa');
    },

    stepSix() {
        this.courseTemplate('browser-tech');
    },

    courseTemplate(course) {
        const data = {
            'teacher': getParam(`${course}-teacher`) || '',
            'startdate': getParam(`${course}-startdate`) || '',
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

        if(Object.keys(courseData).length === 0) {
            console.log('no data');
            return;
        }

        this.getSavedValues(courseData, course);
    },

    getSavedValues(savedValues, course) {

        const stepOneInputs = document.querySelector(`#${course}`).querySelectorAll([`select`, `input`]);

        const ratings = [
            'level',
            'explanation',
            'insight'
        ]

        stepOneInputs.forEach(input => {

            const isRating = ratings.map(rating => input.name.includes(rating)).includes(true);

            if (isRating) {
                if(input.value == savedValues[input.name]){
                    input.checked = true;
                }
            } else {
                input.value = savedValues[input.name];
            }
        });
    },

    saveProgress() {
        console.log('save progress');

        const progress = url.href;
        localStorage.setItem('url', progress);
    },

    getProgress() {
        console.log('get progress');

        const progress = localStorage.getItem('url');
        const isStarted = url.search.length > 0;

        const fetchedProgress = localStorage.getItem('fetched_progress');

        if(progress && !isStarted && fetchedProgress) {
            window.location.href = progress;
        } else {
            this.saveProgress();
        }
        localStorage.setItem('fetched_progress', true);
    }
}
