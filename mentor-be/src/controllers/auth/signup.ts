import User from "../../models/entities/user";
import { Response, Request, NextFunction } from "express";

export default async function signup(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, email, password } = req.body;

  try {
    await User.create({ email, password });
  } catch (error) {
    next("can not create user");
  }

  res.send({
    username,
    email,
    password,
  });
}
