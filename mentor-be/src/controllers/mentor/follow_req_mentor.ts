import { Response, NextFunction } from "express";
import User from "../../models/entities/user";
import { Custom_Req } from "src/types/custom_params";

export default async function follow_mentor(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  const { id: mentor_id } = req.params;

  try {
    const result = await User.updateOne(
      { _id: mentor_id },
      // { $push: { connect_request: id } },
      { $addToSet: { connect_request: req.user._id } },
    );

    res.send(result);
  } catch (error) {
    next(error);
  }
}
