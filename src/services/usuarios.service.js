import DaoFactory from '../models/DAO/dao.factory.js';

const factoryModel = await DaoFactory.crear('usuariosMongo');

const getUsuarioService = async () =>{
    return await factoryModel.getAllUsuariosMongo()
}

const postUsuarioService = async (usuario) => {
    const nuevoUsuario = await factoryModel.postUsuarioMongo(usuario);
    return nuevoUsuario;
}

const putUsuarioService = async (id, usuario) => {
    return await factoryModel.putUsuarioMongo(id, usuario);
}

const patchUsuarioService = async (id, datosActualizados) => {
    return await factoryModel.patchUsuarioMongo(id, datosActualizados);
}

const deleteUsuarioService = async (id) => {
    return await factoryModel.deleteUsuarioMongo(id);
}

export default{
    postUsuarioService,
    getUsuarioService,
    putUsuarioService,
    patchUsuarioService,
    deleteUsuarioService
}


