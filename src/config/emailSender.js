
import transporter  from './nodemailer.js';

async function enviarNotificacionExitosa(datos) {
    
    const {...datosCompra } = datos.body;

    const mailOptions = {
        from: 'tu-email@gmail.com', 
        to: datos.destinatario, 
        subject: 'Notificación de compra exitosa',
        html: `
            <h1>Operación de compra se realizo con éxito</h1>
            <p>Se ha realizado tu compra de forma exitosa.</p>
            <h2>Detalles de la compra:</h2>
            <ul>
                <li><strong>Usuario:</strong> ${datosCompra.comprador}</li> 
                <li><strong>Evento:</strong> ${datosCompra.evento}</li>
                <li><strong>Cantidad de entradas:</strong> ${datosCompra.cantidad}</li>
                <li><strong>Email de contacto:</strong> ${datosCompra.email}</li> 
                <li><strong>Total pagado:</strong> $${datosCompra.precio}</li>
             </ul>
            <p>Gracias por confiar en nosotros.</p>

        `
    };

    try {
        
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return false;
    }
}
export default enviarNotificacionExitosa;