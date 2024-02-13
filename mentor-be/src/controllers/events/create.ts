import { Response, NextFunction } from "express";
import Event from "../../models/entities/events";

import { Custom_Req } from "../../types/custom_params";

export default async function create(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  try {
    const { event_name, event_date } = req.body;
    // const user_id = req.user._id.valueOf();
    // to convert ObjectId to string
    const user_id = req.user._id.toString();
    const event = await Event.create({
      event_name,
      event_date,
      created_by: user_id,
    });
    res.send({
      status: "success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
}
