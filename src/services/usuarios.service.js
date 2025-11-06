import DaoFactory from '../models/dao.factory.js';

const factoryModel = await DaoFactory('usuarios');

const getUsuario = async () =>{
    return await factoryModel.get()
}

const crearService = async (usuario) => {
    const usuario = await factoryModel.crear();
    return usuario;
}

const actualizarService = async (id, datosActualizados) => {
    return await factoryModel.actualizar(id, datosActualizados);
}

const eliminarService = async (id) => {
    return await factoryModel.eliminar(id);
}

export default{
    crearService,
    getUsuario,
    actualizarService,
    eliminarService
}


