import { Request } from "express";

export type Custom_Req = Request & {
  user?: any;
};
