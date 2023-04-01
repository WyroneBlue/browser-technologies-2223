import { Router } from 'express';
const router = Router();
import { index, save } from "../controllers/results.js";

router.get('/', index);
router.post('/save', save);

export default router;