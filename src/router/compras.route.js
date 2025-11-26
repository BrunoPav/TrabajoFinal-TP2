import compraController from '../controller/compras.controllers.js';
import express from 'express';
import authMiddleware from '../middleware/validation.middleware.js'; 

const router = express.Router();


router.get('/compras', compraController.getComprasController);

router.get('/compras/:id', compraController.getCompraByIdController);

router.post('/compras', authMiddleware.validateNewCompra, compraController.postComprasController);

router.put('/compras/:id', compraController.putComprasController);

router.patch('/compras/:id', authMiddleware.validateNewCompra, compraController.patchComprasController);

router.delete('/compras/:id', compraController.deleteComprasController);


export default router;