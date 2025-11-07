import { ObjectId } from "mongodb";
import MongoBDConnection from "../MongoDBConnection.js";

class UsuariosMongoClases {
    constructor() {
        this.collection = "usuarios";
    }

    async getAllUsuariosMongo() {
       const data = await MongoBDConnection.db.collection(this.collection).find().toArray();
       return data;
    }

    async getUsuarioByIdMongo(id) {
        return await MongoBDConnection.db.collection(this.collection).findOne({ _id: id });
    }

    async postUsuarioMongo(usuario) {
        await MongoBDConnection.db.collection(this.collection).insertOne(usuario);
        return usuario;
    }

    async putUsuarioMongo(id, usuario) {
        const data = await MongoBDConnection.db.collection(this.collection).replaceOne({_id: ObjectId.createFromHexString(id) }, { $set: usuario });
        return data;
    }

    async patchUsuarioMongo(id, usuario) {
        const data = await MongoBDConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: usuario });
        return data;
    }

    async deleteUsuarioMongo(id) {
        const data = await MongoBDConnection.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) });
        return data;
    }
}

export default UsuariosMongoClases;
