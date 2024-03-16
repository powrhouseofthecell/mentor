import { Request, Response, NextFunction } from "express";
import User from "../../models/entities/user";
import mongoose from "mongoose";

export default async function schedule_meet(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let { mentor_id } = req.params;
    mentor_id = mentor_id.toString();
    if (mongoose.Types.ObjectId.isValid(mentor_id)) {
      const mentor = await User.findById(mentor_id);
      res.send(mentor);
    } else throw new Error("not a valid ObjectId");
  } catch (error) {
    next(error);
  }
}
