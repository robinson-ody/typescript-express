import { Router } from 'express';
import { create, getById, getAll, updateById, deleteById } from '../controllers/user';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:userId', getById);
router.patch('/:userId', updateById);
router.delete('/:userId', deleteById);

export default router;
