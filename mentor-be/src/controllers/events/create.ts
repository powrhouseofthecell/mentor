import { Response, NextFunction } from "express";
import Event from "../../models/entities/events";

import { Custom_Req } from "../../types/custom_params";

export default async function create(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  try {
    let { event_name, event_date, event_description } = req.body;

    const to = new Date(event_date.to).toDateString();
    const from = new Date(event_date.from).toDateString();

    event_date = {
      to,
      from,
    };
    // const user_id = req.user._id.valueOf();
    // to convert ObjectId to string
    const user_id = req.user._id.toString();
    const event = await Event.create({
      event_name,
      event_date,
      event_description,
      organised_by: user_id,
    });
    res.send({
      status: "success",
      data: event,
    });
  } catch (error) {
    next(error);
  }
}
