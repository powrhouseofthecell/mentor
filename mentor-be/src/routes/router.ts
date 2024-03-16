import express from "express";
const router = express.Router();

import auth_router from "./auth";
import events_router from "./event";
import resources_router from "./resources";
import meet_router from "./meet";

router.use("/auth", auth_router);
router.use("/events", events_router);
router.use("/resources", resources_router);
router.use("/meet", meet_router);
export default router;
