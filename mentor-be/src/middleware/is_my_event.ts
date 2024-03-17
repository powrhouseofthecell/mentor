import { Response, NextFunction } from "express";
import Event from "../models/entities/events";
import { Custom_Req } from "../types/custom_params";

export default async function is_my_event(
  req: Custom_Req,
  _res: Response,
  next: NextFunction,
) {
  try {
    const { id: event_id } = req.params;
    const event = await Event.findById(event_id);
    if (req.user._id.equals(event?.organised_by)) {
      next();
    } else throw new Error("you can not edit this event");
  } catch (err) {
    next(err);
  }
}
