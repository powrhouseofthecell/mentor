import { Request, Response, NextFunction } from "express";
import Event from "../../models/entities/events";

export default async function update(
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { id } = req.params;
  const { event_name, event_date, event_description } = req.body;

  try {
    const e = await Event.findByIdAndUpdate(id, {
      event_name,
      event_date,
      event_description,
    });
    res.send(e);
  } catch (error) {
    throw new Error(error);
  }
}
