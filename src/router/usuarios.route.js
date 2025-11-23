import usuarioController from '../controller/usuarios.controller.js';
import express from 'express';

const router = express.Router();

router.get('/usuarios', usuarioController.getUsuariosController);

router.get('/usuarios/:id', usuarioController.getUsuariosByIdController);

router.post('/usuarios', usuarioController.postUsuarioController);

router.put('/usuarios/:id', usuarioController.putUsuarioController);

router.patch('/usuarios/:id', usuarioController.patchUsuarioController);

router.delete('/usuarios/:id', usuarioController.deleteUsuarioController);


export default router;