import User from "../../models/entities/user";
import { Response, Request, NextFunction } from "express";

export default async function signup(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let { name, email, password } = req.body;
  if (name && email && password) {
    try {
      email = email.toLowerCase();
      const user = await User.create({ name, email, password });
      res.send(user);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json({
      message: "name, email and password are required",
      status: res.status
    })
  }
}
