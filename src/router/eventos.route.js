import eventoController from '../controller/eventos.controller.js';
import express from 'express';

const router = express.Router();

router.get('/Eventos', eventoController.getEventosController);

router.get('/Eventos/:id', eventoController.getEventosByIdController);

router.post('/Eventos', eventoController.postEventosController);

router.put('/Eventos/:id', eventoController.putEventosController);

router.patch('/Eventos/:id', eventoController.patchEventosController);

router.delete('/Eventos/:id', eventoController.deleteEventosController);


export default router;