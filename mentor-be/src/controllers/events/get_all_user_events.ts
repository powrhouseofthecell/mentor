import { Response, NextFunction } from "express";

import Events from "../../models/entities/events";

import { Custom_Req } from "src/types/custom_params";

export default async function get_all_user_events(
  req: Custom_Req,
  res: Response,
  _next: NextFunction,
) {
  const user_id = req.user._id;
  const events_by_user = await Events.find({ organised_by: user_id });
  res.send(events_by_user);
}
