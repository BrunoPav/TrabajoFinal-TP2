import MongoDBConnection from "../MongoDBConnection.js";
import { ObjectId } from "mongodb";

class ComprasMongoClases { 
  constructor() {
    this.collection = "compras"; 
  }

  getComprasMongo = async () => {
    const data = await MongoDBConnection.db.collection(this.collection).find().toArray();
    return data;    
  };

  getCompraByIdMongo = async (id) => {
    return await MongoDBConnection.db.collection(this.collection).findOne({ _id: ObjectId.createFromHexString(id) });
  };

  
  postComprasMongo = async (compra) => {
    const data = await MongoDBConnection.db.collection(this.collection).insertOne(compra);
    return data;  
    
  }; 
  
  putComprasMongo = async (id, compra) => {
    const data = await MongoDBConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: compra });
    return data;
  };


  patchComprasMongo = async (id,compra ) => {
    const data = await MongoDBConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set:compra  });

    return data;
  };

  deleteComprasMongo = async (id) => {
    const data = await MongoDBConnection.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) }); 
   
    return data;
  };
}

export default ComprasMongoClases;