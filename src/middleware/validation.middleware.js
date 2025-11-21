export const validateNewCompra = (req, res, next) => {
    const { evento, cantidad, comprador, fecha, email, precio } = req.body;

    // 1. Validar campos requeridos
    if (!evento || !cantidad || !comprador || !email || !precio) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'Faltan campos obligatorios: evento, cantidad, comprador, email y precio son requeridos.' 
        });
    }

    // 2. Validar tipos de datos (Ejemplos)
    if (typeof cantidad !== 'number' || cantidad <= 0) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'La cantidad debe ser un número positivo.' 
        });
    }

    if (typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'El email no tiene un formato válido.' 
        });
    }
    next();
};