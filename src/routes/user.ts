import { Router } from 'express';
import { create, getById } from '../controllers/user';

const router = Router();

router.post('/', create);
router.get('/');
router.get('/:userId', getById);
router.patch('/:userId');
router.delete('/:userId');

export default router;
