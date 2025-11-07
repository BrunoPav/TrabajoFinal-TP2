import usuarioController from '../controller/usuarios.controller.js';
import express from 'express';

const router = express.Router();

router.get('/Usuarios', usuarioController.getUsuariosController);

router.post('/Usuarios', usuarioController.postUsuarioController);

router.put('/Usuarios/:id', usuarioController.putUsuarioController);

router.patch('/Usuarios/:id', usuarioController.patchUsuarioController);

router.delete('/Usuarios/:id', usuarioController.deleteUsuarioController);


export default router;