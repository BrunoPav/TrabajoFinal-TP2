import { MongoClient } from 'mongodb';

class MongoBDConnection {

    static client = new MongoClient('mongodb://localhost:27017');
    // Aca se puede cambiar 'prueba' por el nombre de la base de datos que se quiera usar
    static db = this.client.db('prueba');

}


export default MongoBDConnection;