import { getLocalStorage, setLocalStorage } from '../helpers/Localstorage.js';
import { courses, queryString }  from './courses.js';

export const index = async(req, res) => {

    const page = {
        title: "Home"
    };

    const storage = getLocalStorage('userInfo');
    let values = {};
    if(storage){
        values = JSON.parse(storage);
    }

    res.status(200).render('home', {
        page,
        courseStart: courses[0].slug,
        index: 'start',
        query: queryString(req),
        values
    });
};

export const saveUser = async(req, res) => {


    const values = JSON.stringify(req.body);
    setLocalStorage('userInfo', values);

    res.redirect(`/course/${courses[0].slug}`);
}

export const course = (req, res) => {

    const valueSlug = req.query.course;

    const values = JSON.stringify({
        teacher: req.query[ `${valueSlug}-teacher` ],
        startdate: req.query[ `${valueSlug}-startdate` ],
        level: req.query[ `${valueSlug}-level` ],
        explanation: req.query[ `${valueSlug}-explanation` ],
        insight: req.query[ `${valueSlug}-insight` ],
        next: req.query.next
    });

    setLocalStorage(valueSlug, values);

    const { slug } = req.params;

    if(slug === 'final'){
        res.redirect('/results');
    }

    const course = courses.find(course => course.slug === slug);
    const index = courses.findIndex(course => course.slug === slug) + 1;

    const page = {
        title: `Course: ${course.name}`
    };

    const storage = JSON.parse(getLocalStorage(slug)) || {};
    console.log('storage', storage);

    res.status(200).render('course', {
        page,
        course,
        values: storage,
        index,
        query: queryString(req)
    });
};

export const thanks = (req, res) => {

    const page = {
        title: "Thanks"
    };

    res.status(200).render('thanks', {
        page
    });
};