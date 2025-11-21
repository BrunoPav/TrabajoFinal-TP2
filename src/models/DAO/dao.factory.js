import EventoModel from './Evento.model.js'
import UsuarioModel from './Usuario.model.js'
import compraModel from './compra.model.js'

import UsuariosMongoClases from './Usuarios.mongo.clases.js'
import EventosMongoClases from './Eventos.mongo.clases.js'
import ComprasMongoClases from './compras.mongo.clases.js';

class Factory{
	static  create (type){
        switch (type) {
            case 'eventos':
                console.log("Persistiendo en memoria del servidor EventoModel");
                return  new EventoModel()
            case 'usuarios':
                console.log("Persistiendo en memoria del servidor UsuarioModel");
                return  new UsuarioModel()
            case 'MEM':
                console.log("Persistiendo en memoria del servidor compraModel");
                return  new compraModel()
            case 'usuariosMongo':
                console.log("Persistiendo en MongoDB UsuariosMongoClases");
                return  new UsuariosMongoClases()
            case 'eventosMongo':
                console.log("Persistiendo en MongoDB EventosMongoClases");
                return  new EventosMongoClases()
            case 'comprasMongo':
                console.log("Persistiendo en MongoDB EventosMongoClases");
                return  new ComprasMongoClases()
            default:
                return null
        }
    }
	
	/** VA: comentado por la mejora arriba.
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
    } */
    
    
    
}

export default Factory;