import express from "express";
import dotenv from "dotenv";
import cookie_parser from "cookie-parser";
import { Request, Response, NextFunction } from "express";

import protect from "./controllers/auth/protect";

const app = express();
dotenv.config();

import router from "./routes/router";
import create_db_con from "./db/create_con";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie_parser());

const DB_URI = process.env.DB_URI?.replace(
  "<password>",
  process.env.DB_PASSWORD as string,
) as string;
const PORT = process.env.PORT;

app.use("/api/v1", router);

app.get("/hello", protect, (_req, res, _next) => {
  res.send({
    error: false,
    data: "You are authenticated",
  });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log("============================");
  console.log(err);
  console.log("============================");
  res.send({ error: true, message: err.message });
});

create_db_con(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🛢 DB connected and App started on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });
