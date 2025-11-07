class Usuario {
    constructor({id, nombre, email, password, rol}) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
    
    static async postUsuario(newUsuario) {
        if (newUsuario != null) {
            usuarios.push(newUsuario)
        }
        else {
            return "Error: El usuario es nulo"
        }
        return await usuarios
    }

    static async putUsuario(id, updatedUsuario) {
        const index = usuarios.findIndex(usuario => usuario.id == id)
        if (index !== -1) {
            usuarios[index] = { id, ...updatedUsuario }
        } else {
            return `Error: No se encontró el usuario con id ${id}`
        }
    }
    
    static async patchUsuario(id, updatedUsuario) {
        const index = usuarios.findIndex(usuario => usuario.id == id)
        if (index !== -1) {
            usuarios[index] = { id, ...updatedUsuario }
        } else {
            return `Error: No se encontró el usuario con id ${id}`
        }
    }

    static async deleteUsuario(id) {
        const index = usuarios.findIndex(usuario => usuario.id == id)
        if (index !== -1) {
            usuarios.splice(index, 1)
        } else {
            return `Error: No se encontró el usuario con id ${id}`
        }
    }


}
export default {
    postUsuario: Usuario.postUsuario,
    putUsuario: Usuario.putUsuario,
    patchUsuario: Usuario.patchUsuario,
    deleteUsuario: Usuario.deleteUsuario
}


