import jwt from 'jsonwebtoken';
import { secretKey } from '../variable';
export default async (req, res, next) => {
    const token = req.headers['auth'];
    let jwtPayload;
    try {
        jwtPayload = jwt.verify(token, secretKey);
        res.locals.userDataAuth = jwtPayload;
    }
    catch (error) {
        res.status(401).send();
        return;
    }
    const { userId } = jwtPayload;
    const newToken = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    res.setHeader('accessToken', newToken);
    next();
};
