import { ObjectId } from "mongodb";
import MongoBDConnection from "../MongoDBConnection.js";

class EventosMongoClases {
    constructor() {
        this.collection = "eventos";
    }

    async getAllEventosMongo() {
       const data = await MongoBDConnection.db.collection(this.collection).find().toArray();
       return data;
    }

    async getEventoByIdMongo(id) {
        return await MongoBDConnection.db.collection(this.collection).findOne({ _id: id });
    }

    async postEventoMongo(evento) {
        await MongoBDConnection.db.collection(this.collection).insertOne(evento);
        return evento;
    }

    async putEventoMongo(id, evento) {    
        if (evento._id) delete evento._id;
        evento._id = ObjectId.createFromHexString(id);
        const data = await MongoBDConnection.db.collection(this.collection).replaceOne({ _id: ObjectId.createFromHexString(id) }, evento);
        return data;
    }

    async patchEventoMongo(id, evento) {
        const data = await MongoBDConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: evento });
        return data;
    }

    async deleteEventoMongo(id) {
        const data = await MongoBDConnection.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) });
        return data;
    }
}

export default EventosMongoClases;
