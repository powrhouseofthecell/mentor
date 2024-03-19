import { Response, NextFunction } from "express";
import User from "../../models/entities/user";
import { Custom_Req } from "../../types/custom_params";

export default async function update_calendly_id(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  try {
    const { calendly_id } = req.body;
    const link = `https://calendly.com/${calendly_id}`;
    if (req.user._id) {
      await User.findByIdAndUpdate(req.user._id, {
        calendly_id: link,
      });
      res.send({
        error: false,
        message: "id updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
}
