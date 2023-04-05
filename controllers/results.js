import { courses } from './courses.js';
import { getLocalStorage, clearLocalStorage } from '../helpers/Localstorage.js';

export const index = async(req, res) => {

    const page = {
        title: "Results"
    };

    const courseValues = courses.map(course => {
        return {
            ...course,
            values: JSON.parse(getLocalStorage(course.slug))
        }
    });

    res.status(200).render('results', {
        page,
        index: 'results',
        courses: courseValues,
        userInfo: JSON.parse(getLocalStorage('userInfo'))
    });
}

export const save = async(req, res) => {

    console.log(req.body);
    clearLocalStorage();

    res.redirect('/thanks');
}
