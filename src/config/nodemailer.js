import nodemailer from 'nodemailer';

// 1. Configuración del transportador
const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
        user: 'valonso2609@gmail.com', // Tu correo electrónico (el remitente)
        pass: 'jupy jfdt sfrd enwk' // La contraseña de aplicación generada
    }
});

export default transporter;

