import User from "../../models/entities/user";
import { Response, Request, NextFunction } from "express";

export default async function signup(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const user = await User.create({ name, email, password });
      res.send(user);
    } catch (error) {
      next("can not create user");
    }
  }
}
