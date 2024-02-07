import { Response, Request, NextFunction } from 'express';

export default function signup(req: Request, res: Response, _next: NextFunction) {
  const { username, email, password } = req.body;

  res.send({
    username,
    email,
    password,
  });
}
