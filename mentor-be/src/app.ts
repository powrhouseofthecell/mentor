import express from "express";
import dotenv from "dotenv";
import cookie_parser from "cookie-parser";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import router from "./routes/router";
import path from "path";

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie_parser());

app.use("/api/v1", router);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  // handle the status code properly
  // 1. Have it based on the err.message from a json file?
  if (err.keyValue.event_name) {
    res
      .status(400)
      .send({ error: true, message: "An event with the same name already exists" });
  }
  if (err.message.includes("E11000 duplicate key error collection")) {
    res
      .status(400)
      .send({ error: true, message: "Email is already registered" });
  }
  res.status(400).send({ error: true, message: err.message });
});

export default app;
