import compraService from '../services/compras.services.js';
import enviarNotificacionExitosa from '../config/emailSender.js';
import weatherService from '../config/weatherService.js';

const getComprasController = async (req,res) => {
    const compra = await compraService.getCompraService()
    res.send(compra)
}

const getCompraByIdController = async (req, res) => {
    const id = req.params.id;
    const compra = await compraService.getCompraByIdService(id);
    res.send(compra);
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

        const ciudadEvento = 'Buenos Aires'; 
        console.log('Consultando clima para:', ciudadEvento);
        const clima = await weatherService.getWeather(ciudadEvento);
        console.log('Clima obtenido:', clima);
        

        const compraConClima = {
            ...nuevaCompra,
            clima: clima,
            fechaCreacion: new Date().toISOString()
        };
        
        const compraCreada = await compraService.postCompraService(compraConClima);

        if (compraCreada) {
            
            const mailData = {
                destinatario: 'tu-email@gmail.com', // Cambiar por tu email para recibir notificaciones
                body: compraCreada
            };
            
            await enviarNotificacionExitosa(mailData); 
        }

        return res.status(200).json({
            status: 'success',
            message: 'Compra creada con información del clima y notificación enviada.',
            data: {
                ...compraConClima,
                dbResult: compraCreada
            },
            clima: clima
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
    try {
        const resultado = await compraService.patchCompraService(id, datosActualizados);

        if (!resultado || resultado.modifiedCount === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'No se encontró la compra para actualizar.'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Compra actualizada correctamente.',
            modifiedCount: resultado.modifiedCount
        });
    } catch (error) {
        console.error('Error al actualizar la compra:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor al actualizar la compra.'
        });
    }
}

const deleteComprasController = async (req, res) => {
    const id = req.params.id;
    const compraEliminada = await compraService.deleteCompraService(id);
    res.send(compraEliminada);
}

export default {
    getComprasController,
    getCompraByIdController,
    postComprasController,
    putComprasController,
    patchComprasController,
    deleteComprasController
}