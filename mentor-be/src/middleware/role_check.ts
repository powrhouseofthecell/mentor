import { Response, NextFunction } from "express";

import { Custom_Req } from "../types/custom_params";

export default function role_check(
  req: Custom_Req,
  _res: Response,
  next: NextFunction,
) {
  try {
    if (req.user.role === "admin" || req.user.role === "mentor") {
      next();
    } else {
      throw new Error("only admins or mentors can perform this action.");
    }
  } catch (err) {
    next(err);
  }
}
