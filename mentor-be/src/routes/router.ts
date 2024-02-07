import express from "express";
const router = express.Router();
import auth_router from "./auth";

router.use("/auth", auth_router);

export default router;
