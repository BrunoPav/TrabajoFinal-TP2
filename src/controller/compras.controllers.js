import compraService from '../services/compras.services.js';
import enviarNotificacionExitosa from '../config/emailSender.js';

const getComprasController = async (req,res) => {
    const compra = await compraService.getCompraService()
    res.send(compra)
}
//VA: hago el cambio para que envie el mail al crear una compra
/*
const postComprasController = async (req, res) => {
    const nuevaCompra = req.body;
    console.log('Nueva compra recibida:', nuevaCompra);
    const compraCreada = await compraService.postCompraService(nuevaCompra);
    res.send(compraCreada);
} */

const postComprasController = async (req, res) => {
    
    const nuevaCompra = req.body;
    console.log('Nueva compra recibida:', nuevaCompra);
    
    try {
        
        const compraCreada = await compraService.postCompraService(nuevaCompra);

        if (compraCreada) {
            
            const mailData = {
                destinatario: 'valonso2609@gmail.com',
                body: compraCreada
            };
            
            await enviarNotificacionExitosa(mailData); 
        }

        return res.status(200).json({
            status: 'success',
            message: 'Compra creada y notificación enviada.',
            data: compraCreada
        });

    } catch (error) {
        
        console.error('Error al procesar la compra:', error);
        
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor al crear la compra.'
        });
    }
}

const putComprasController = async (req, res) => {
    const id = req.params.id;
    const compra = req.body;
    const compraActualizada = await compraService.putCompraService(id, compra);
    res.send(compraActualizada);
}

const patchComprasController = async (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    const compraActualizada = await compraService.patchCompraService(id, datosActualizados);
    res.send(compraActualizada);
}

const deleteComprasController = async (req, res) => {
    const id = req.params.id;
    const compraEliminada = await compraService.deleteCompraService(id);
    res.send(compraEliminada);
}

export default {
    getComprasController,
    postComprasController,
    putComprasController,
    patchComprasController,
    deleteComprasController
}