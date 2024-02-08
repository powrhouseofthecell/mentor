import User from "../../models/entities/user";
import { Response, Request, NextFunction } from "express";

export default async function signup(
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { username, email, password } = req.body;

  try {
    await User.create({ email, password });
  } catch (error) {
    throw new Error("can not create user");
  }

  res.send({
    username,
    email,
    password,
  });
}
