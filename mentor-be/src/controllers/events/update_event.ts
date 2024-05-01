import { Request, Response, NextFunction } from "express";
import Event from "../../models/entities/events";

export default async function update(
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { id } = req.params;
  let { event_name, event_date, event_description } = req.body;

  const to = new Date(event_date.to).toDateString();
  const from = new Date(event_date.from).toDateString();

  // event_date = JSON.stringify(event_date);
  event_date = {
    to,
    from,
  };

  try {
    const e = await Event.findByIdAndUpdate(id, {
      event_name,
      event_date,
      event_description,
    });
    // TODO: on returning the data it returns the old data
    res.send(e);
  } catch (error) {
    throw new Error(error);
  }
}
