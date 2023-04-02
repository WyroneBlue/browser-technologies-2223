import { getLocalStorage, setLocalStorage } from '../helpers/Localstorage.js';

export const saveProgress = (req, res, next) => {

    const ref = req.headers.referer;
    const progress = getLocalStorage('progress');
    const url = req._parsedUrl.pathname;
    setLocalStorage('progress', url);

    if (!ref && url === '/' && progress !== '/' && progress !== '/thanks' && progress !== url){

        res.redirect(progress);
    } else {
        next();
    }
};