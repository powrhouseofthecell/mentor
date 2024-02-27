import { Response, NextFunction } from "express";
import Event from "../../models/entities/events";
import { Custom_Req } from "../../types/custom_params";

export default async function attend_event(
  req: Custom_Req,
  res: Response,
  _next: NextFunction,
) {
  const { id } = req.params;
  const { _id } = req.user;
  const event = await Event.findByIdAndUpdate(id, { attended_by: _id });
  res.send({ event });
}
