import { Response, NextFunction } from "express";
import Event from "../../models/entities/events";
import { Custom_Req } from "../../types/custom_params";

export default async function attend_event(
  req: Custom_Req,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  const { _id } = req.user;

  try {
    const event = await Event.updateOne(
      { _id: id },
      { $addToSet: { attended_by: _id } },
    );
    res.send({ event });
  } catch (error) {
    next(error);
  }
}
