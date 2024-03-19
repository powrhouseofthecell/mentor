import { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";

export default function get_all_resources(
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const path_down = path.join(__dirname, "../../public/uploads");

  fs.readdir(path_down, (err, files) => {
    if (err) {
      return;
    }

    // Filter out directories (if any)
    files = files.filter((file) =>
      fs.statSync(path.join(path_down, file)).isFile(),
    );

    // Get file names and types
    const file_details = files.map((file) => {
      return {
        name: file,
        type: path.extname(file).slice(1),
      };
    });

    res.json(file_details);
  });
}
