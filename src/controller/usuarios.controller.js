import usuarioService from '../services/usuarios.service.js';
import authMiddleware from '../middleware/jwt.middleware.js';

const getUsuariosController = async (req,res) => {
    const usuario = await usuarioService.getUsuarioService()
    res.send(usuario)
}

const loginUsuarioController = async (req, res) => {
    const data = req.headers;
    console.log(data);
    if (data && data.user && data.password) {
        const tkn = await authMiddleware.generarToken(data);
        return res.status(200).send({ status: 'success', token: tkn });
    } else {
        return res.status(400).send({ status: 'error', message: 'Faltan credenciales' });
    }
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
    loginUsuarioController,
    getUsuariosController,
    getUsuariosByIdController,
    postUsuarioController,
    putUsuarioController,
    patchUsuarioController,
    deleteUsuarioController
}