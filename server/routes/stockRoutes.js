// route
import express from 'express';
import {
        getStock, 
        getStockById,
        saveStock,
        updateStock,
        deleteStock
} from '../controller/stockController.js';
const router = express.Router();

router.get('/stocks', getStock);
router.get('/stocks/:id', getStockById);
router.post('/stocks', saveStock);
router.patch('/stocks/:id', updateStock);
router.delete('/stocks/:id', deleteStock);

export default router;
