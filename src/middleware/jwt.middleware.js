/*import jwt from 'jsonwebtoken'; 

const SECRET = process.env.SECRET;

const generateToken = async (data) => {

    const payload = {
        user: data.user,
        password: data.password
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2m' });
    return token;
}


const validateToken = async (req, res, next) => {

    const tkn = req.headers.authorization;

    //sacamos el "Bearer" del token
    const splitBearer = tkn.split(" ")[1]

    const validation = await jwt.verify(splitBearer, SECRET);
    next();
}

export default {
    generateToken,
    validateToken
}; */