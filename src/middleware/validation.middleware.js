const validateNewCompra = (req, res, next) => {
    const { evento, cantidad, comprador, email, precio } = req.body;

    
    if (!evento || !cantidad || !comprador || !email || !precio) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'Faltan campos obligatorios: evento, cantidad, comprador, email y precio son requeridos.' 
        });
    }

    
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

const validateNewUsuario = (req, res, next) => {
    const { nombre, email, password, rol } = req.body;
    if (!nombre || !email || !password || !rol) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'Faltan campos obligatorios: nombre, email, password y rol son requeridos.' 
        });
    }

    if (typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'El email no tiene un formato válido.' 
        });
    }

    next();
}



export default { validateNewCompra, validateNewUsuario};