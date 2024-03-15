import { Request, Response, NextFunction } from 'express';
import path from 'path';

export default function download(req: Request, res: Response, _next: NextFunction) {
  const { filename } = req.params;
  const path_down = path.join(__dirname, '../../public/uploads', filename);
  res.download(path_down);
}
