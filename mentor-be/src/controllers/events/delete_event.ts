import { Request, Response, NextFunction } from "express";
import Event from "../../models/entities/events";

export default async function delete_event(
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(204).send();
}
