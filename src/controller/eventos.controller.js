import eventoService from '../services/eventos.service.js';

const getEventosController = async (req,res) => {
    const evento = await eventoService.getEventoService()
    res.send(evento)
}

const getEventosByIdController = async (req, res) => {
    const id = req.params.id;
    const evento = await eventoService.getEventoByIdService(id);
    res.send(evento);
}

const postEventosController = async (req, res) => {
    const nuevoEvento = req.body;
    const eventoCreado = await eventoService.postEventoService(nuevoEvento);
    res.send(eventoCreado);
}

const putEventosController = async (req, res) => {
    const id = req.params.id;
    const evento = req.body;
    const eventoActualizado = await eventoService.putEventoService(id, evento);
    res.send(eventoActualizado);
}

const patchEventosController = async (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    const eventoActualizado = await eventoService.patchEventoService(id, datosActualizados);
    res.send(eventoActualizado);
}

const deleteEventosController = async (req, res) => {
    const id = req.params.id;
    const eventoEliminado = await eventoService.deleteEventoService(id);
    res.send(eventoEliminado);
}

export default {
    getEventosController,
    getEventosByIdController,
    postEventosController,
    putEventosController,
    patchEventosController,
    deleteEventosController
}