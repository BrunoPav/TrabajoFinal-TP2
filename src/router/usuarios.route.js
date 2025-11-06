import usuarioController from '../controller/usuarios.controller.js';
import express from 'express';

const router = express.Router();

router.get('/getUsuarios', usuarioController.getUsuariosController);

router.post('/crearUsuario', usuarioController.crearUsuarioController);

router.put('/actualizarUsuario/:id', usuarioController.actualizarUsuarioController);

router.delete('/eliminarUsuario/:id', usuarioController.eliminarUsuarioController);


export default router;