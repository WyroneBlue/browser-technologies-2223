import { Router } from 'express';
const router = Router();
import { index, course, thanks, saveUser } from "../controllers/home.js";

router.get('/', index);
router.post('/', saveUser);
router.get('/course/:slug', course);
router.get('/thanks', thanks);


export default router;