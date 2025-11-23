import nodemailer from 'nodemailer';

// 1. Configuración del transportador
const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
        user: 'tu-email@gmail.com', // Cambiar por tu email real
        pass: 'tu-contraseña-aplicacion' // Cambiar por tu contraseña de aplicación
    }
});

export default transporter;

