import DaoFactory from '../models/DAO/dao.factory.js';


class ComprasService {
    constructor() {
    
      //  this.model = DaoFactory.create(process.env.PERSISTENCE);
        this.model = DaoFactory.create('comprasMongo');
    }

    postCompraService = async (compra) => {
     
        const nuevaCompra = await this.model.postComprasMongo(compra); 
        return nuevaCompra;
    }
    
   
    getCompraService = async () => {
        // Asumiendo que el método en el DAO es 'getAllComprasMongo'
        const compras = await this.model.getComprasMongo(); 
        return compras;
    }

    
    putCompraService = async (id, compra) => {
        const compraActualizada = await this.model.putComprasMongo(id, compra);
        return compraActualizada;
    }

    patchCompraService = async (id, datosActualizados) => {
        const compraActualizada = await this.model.patchComprasMongo(id, datosActualizados);
        return compraActualizada;
    }

    deleteCompraService = async (id) => {
        const resultado = await this.model.deleteComprasMongo(id);
        return resultado;
    }
}


export default new ComprasService();
  