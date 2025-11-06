import usuarioService from '../services/usuarios.service.js';

const getUsuariosController = async (req,res) => {
    const usuario = await usuarioService.getUsuario()
    res.send(usuario)
}

const crearUsuarioController = async (req, res) => {
    const nuevoUsuario = req.body;
    const usuarioCreado = await usuarioService.crearService(nuevoUsuario);
    res.send(usuarioCreado);
}

const actualizarUsuarioController = async (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    const usuarioActualizado = await usuarioService.actualizarService(id, datosActualizados);
    res.send(usuarioActualizado);
}

const eliminarUsuarioController = async (req, res) => {
    const id = req.params.id;
    const usuarioEliminado = await usuarioService.eliminarService(id);
    res.send(usuarioEliminado);
}

export default {
    getUsuariosController,
    crearUsuarioController,
    actualizarUsuarioController,
    eliminarUsuarioController
}