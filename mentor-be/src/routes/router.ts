import express from "express";
const router = express.Router();

import auth_router from "./auth";
import events_router from "./event";

router.use("/auth", auth_router);
router.use("/events", events_router);
export default router;
