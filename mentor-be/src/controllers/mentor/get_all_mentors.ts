import { Request, Response, NextFunction } from "express";
import User from "../../models/entities/user";

export default async function get_all_mentors(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const mentors = await User.find({ role: "mentor" });
    res.send(mentors);
  } catch (error) {
    next(error);
  }
}
