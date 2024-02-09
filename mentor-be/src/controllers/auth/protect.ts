import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/entities/user';
// import { Custom_Request } from '../../types/controller_params';

// TODO: Fix the request type (probably add types to the model)
export default async function protect(req: any, _res: Response, next: NextFunction) {
  let token: string | null = null;
  // Find token in authorization headers or cookies

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
      token = req.headers.authorization.split(' ')[1];
    else if (req.cookies.auth_token) token = req.cookies.auth_token;

    if (!token) throw new Error('You are not authenticated, please login to get access');

    jwt.verify(token, process.env.JWT_SECRET as string);
    const decoded = jwt.decode(token) as {
      userid: String;
      iat: any;
      exp: any;
    };
    const id = decoded.userid;
    const user = await User.findById(id);
    if (user) {
      req.user = user;
      next();
    }
  } catch (error) {
    next(error);
  }
}
