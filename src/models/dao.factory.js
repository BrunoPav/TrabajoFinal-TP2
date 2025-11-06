import EventoModel from './evento.model.js'
import UsuarioModel from './usuario.model.js'
class Factory{
    static async crear(type){
        switch (type) {
            case 'eventos':
                return await new EventoModel()
            case 'usuarios':
                return await new UsuarioModel()
            default:
                return null
        }
    }
}

export default Factory;