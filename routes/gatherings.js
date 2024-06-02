import express from 'express';
import {
    list,
    show,
    newForm,
    create,
    editForm,
    update,
    deleteGathering
} from '../controllers/gatherings.js';

const router = express.Router();

router.get('/', list);
router.get('/new', newForm);
router.post('/', create);
router.get('/:id', show);
router.get('/:id/edit', editForm);
router.put('/:id', update);
router.delete('/:id', deleteGathering);

export default router;
