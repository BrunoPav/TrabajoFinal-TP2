import MongoDBConnection from "../MongoDBConnection.js";
import { ObjectId } from "mongodb";

class ComprasMongoClases { // Clase DAO
  constructor() {
    this.collection = "compras"; // Colección de MongoDB
  }

  

  getComprasMongo = async () => {
    const data = await MongoDBConnection.db.collection(this.collection).find().toArray();
    return data;    
  };

  
  postComprasMongo = async (compra) => {
    const data = await MongoDBConnection.db.collection(this.collection).insertOne(compra);
    return data;  
    
  }; 
  
  putComprasMongo = async (id, compra) => {
    const data = await MongoDBConnection.db.collection(this.collection).replaceOne({ _id: ObjectId.createFromHexString(id) }, compra);
    return data;
   
   
    
  };

  // 4. MÉTODO PATCH
  patchComprasMongo = async (id,compra ) => {
    const data = await MongoDBConnection.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set:compra  });

    return data;
  };

  // 5. MÉTODO DELETE
  deleteComprasMongo = async (id) => {
    const data = await MongoDBConnection.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) }); 
   
    return data;
  };
}

export default ComprasMongoClases;