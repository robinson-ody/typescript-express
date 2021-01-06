import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secretKey } from '../variable';

interface JwtPayload {
  userId: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  // * Get token from headers
  const token = <string>req.headers['auth'];
  let jwtPayload: JwtPayload;

  // * Validate token and get data
  try {
    jwtPayload = <JwtPayload>jwt.verify(token, secretKey);
    res.locals.userDataAuth = jwtPayload;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }

  // * Send a new token on every request
  const { userId } = jwtPayload;
  const newToken = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  res.setHeader('accessToken', newToken);

  return next();
};
