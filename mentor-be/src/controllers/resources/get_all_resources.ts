import { Request, Response, NextFunction } from "express";
export default function get_all_resources(
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.send("getting all resources");
}
