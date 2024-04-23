import Event from "../../models/entities/events";
import { Request, Response, NextFunction } from "express";

export default async function update(
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { id } = req.params;

  try {
    const event = await Event.find({ _id: id }).populate({
      path: "attended_by",
      model: "User",
    });

    // TODO: on returning the data it returns the old data
    res.send(event);
  } catch (error) {
    throw new Error(error);
  }
}
