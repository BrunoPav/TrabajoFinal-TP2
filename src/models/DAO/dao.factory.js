import EventoModel from './Evento.model.js'
import UsuarioModel from './Usuario.model.js'
import UsuariosMongoClases from './Usuarios.mongo.clases.js'
import EventosMongoClases from './Eventos.mongo.clases.js'

class Factory{
    static async crear(type){
        switch (type) {
            case 'eventos':
                console.log("Persistiendo en memoria del servidor EventoModel");
                return await new EventoModel()
            case 'usuarios':
                console.log("Persistiendo en memoria del servidor UsuarioModel");
                return await new UsuarioModel()
            case 'usuariosMongo':
                console.log("Persistiendo en MongoDB UsuariosMongoClases");
                return await new UsuariosMongoClases()
            case 'eventosMongo':
                console.log("Persistiendo en MongoDB EventosMongoClases");
                return await new EventosMongoClases()
            default:
                return null
        }
    }
}

export default Factory;