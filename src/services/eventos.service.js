import DaoFactory from '../models/DAO/dao.factory.js';

const factoryModel = await DaoFactory.create('eventosMongo');
//VA: const factoryModel = await DaoFactory.create('process.env.PERSISTENCE');

const getEventoService = async () =>{
    return await factoryModel.getAllEventosMongo()
}

const getEventoByIdService = async (id) => {
    return await factoryModel.getEventoByIdMongo(id);
}

const postEventoService = async (evento) => {
    const nuevoEvento = await factoryModel.postEventoMongo(evento);
    return nuevoEvento;
}

const putEventoService = async (id, evento) => {
    return await factoryModel.putEventoMongo(id, evento);
}

const patchEventoService = async (id, datosActualizados) => {
    return await factoryModel.patchEventoMongo(id, datosActualizados);
}

const deleteEventoService = async (id) => {
    return await factoryModel.deleteEventoMongo(id);
}

export default{
    postEventoService,
    getEventoService,
    putEventoService,
    patchEventoService,
    deleteEventoService,
    getEventoByIdService
}