import { Request, Response, NextFunction } from "express";

export default function upload(
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.status(200).json({
    message: "file uploaded successfully",
  });
}
