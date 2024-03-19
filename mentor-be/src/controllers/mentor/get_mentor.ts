import { Request, Response, NextFunction } from "express";
import User from "../../models/entities/user";

export default async function get_mentor(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id: mentor_id } = req.params;
  try {
    const mentor = await User.findById(mentor_id);
    res.send(mentor);
  } catch (error) {
    next(error);
  }
}
