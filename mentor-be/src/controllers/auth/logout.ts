import { Response, Request, NextFunction } from 'express';

export default function logout(_req: Request, res: Response, _next: NextFunction) {
  res.clearCookie('auth_token');

  return res.status(200).json({
    status: 'success',
    message: 'logout successfully',
  });
}
