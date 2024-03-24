import { Response, NextFunction } from "express";
import User from "../../models/entities/user";
import { Custom_Req } from "src/types/custom_params";
import mongoose from "mongoose";

export default async function accept_request(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  let { mentee_id } = req.body;

  try {
    mentee_id = mongoose.Types.ObjectId.createFromHexString(mentee_id);

    await User.updateOne(
      { _id: req.user._id },
      {
        $pull: { connect_request: mentee_id },
        $addToSet: { mentees: mentee_id },
      },
    );

    res.send({
      error: false,
      message: "Request accepted",
    });
  } catch (error) {
    next(error);
  }
}
