import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = async (payload: any, expiresIn: string | number) => {
    return jwt.sign(payload, secretKey, { expiresIn: expiresIn });
}

export const verifyToken = async (token: string) => {
    return jwt.verify(token, secretKey);
}

export const checkTokenValidity = async (token: string) => {
    const decoded: any = jwt.decode(token);
    const exp: number | undefined = decoded?.exp;
    const expirationDate = new Date(exp! * 1000);

    if (token && expirationDate <= new Date()) {
        return false;
    }
    return true;
}
