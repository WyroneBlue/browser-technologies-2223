import { Router } from 'express';
const router = Router();

import home from './home.js';
import results from './results.js';
import { queryString } from '../controllers/courses.js';

router.use('/', home);
router.use('/results', results);

export default router;