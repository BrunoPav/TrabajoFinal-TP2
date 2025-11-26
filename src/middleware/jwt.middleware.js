import jwt from 'jsonwebtoken'

const SECRET_KEY = 'secretisimo'

const generarToken = async (data) => {

    const payload = {
        user: data.user,
        password: data.password
    }

    const token = await jwt.sign({payload}, SECRET_KEY, { expiresIn: '2m' });
    return token;
}

export default { generarToken };