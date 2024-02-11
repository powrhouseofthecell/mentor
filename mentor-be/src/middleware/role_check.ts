import { Request, Response, NextFunction } from 'express';

type Custom_Req = Request & {
  user?: any;
};

export default function role_check(req: Custom_Req, _res: Response, next: NextFunction) {
  try {
    if (req.user.role === 'admin' || req.user.role === 'mentor') {
      next();
    } else {
      throw new Error('only admin/mentor can create events.');
    }
  } catch (err) {
    next(err);
  }
}
