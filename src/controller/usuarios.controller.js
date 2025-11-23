import usuarioService from '../services/usuarios.service.js';
// VA: import authMiddleware from '../middlewares/jwt.middleware.js';

const getUsuariosController = async (req,res) => {
    const usuario = await usuarioService.getUsuarioService()
    res.send(usuario)
}

const getUsuariosByIdController = async (req, res) => {
    const id = req.params.id;
    const usuario = await usuarioService.getUsuarioByIdService(id);
    res.send(usuario);
}

const postUsuarioController = async (req, res) => {
    const nuevoUsuario = req.body;
    const usuarioCreado = await usuarioService.postUsuarioService(nuevoUsuario);
    res.send(usuarioCreado);
}

const putUsuarioController = async (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    const usuarioActualizado = await usuarioService.putUsuarioService(id, usuario);
    res.send(usuarioActualizado);
}

const patchUsuarioController = async (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    const usuarioActualizado = await usuarioService.patchUsuarioService(id, datosActualizados);
    res.send(usuarioActualizado);
}

const deleteUsuarioController = async (req, res) => {
    const id = req.params.id;
    const usuarioEliminado = await usuarioService.deleteUsuarioService(id);
    res.send(usuarioEliminado);
}

export default {
    getUsuariosController,
    getUsuariosByIdController,
    postUsuarioController,
    putUsuarioController,
    patchUsuarioController,
    deleteUsuarioController
}