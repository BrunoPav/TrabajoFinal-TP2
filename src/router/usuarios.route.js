import usuarioController from '../controller/usuarios.controller.js';
import authMiddleware from '../middleware/validation.middleware.js'; 
import express from 'express';

const router = express.Router();

router.get('/usuarios', usuarioController.getUsuariosController);

router.get('/usuarios/:id', usuarioController.getUsuariosByIdController);

router.post('/usuarios/login', usuarioController.loginUsuarioController);

router.post('/usuarios', authMiddleware.validateNewUsuario, usuarioController.postUsuarioController);

router.put('/usuarios/:id', usuarioController.putUsuarioController);

router.patch('/usuarios/:id', authMiddleware.validateNewUsuario, usuarioController.patchUsuarioController);

router.delete('/usuarios/:id', usuarioController.deleteUsuarioController);


export default router;