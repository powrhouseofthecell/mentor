import express from "express";
const router = express.Router();

import auth_router from "./auth";
import events_router from "./event";
import resources_router from "./resources";
import meet_router from "./meet";
import mentor_router from "./mentors";

router.use("/auth", auth_router);
router.use("/events", events_router);
router.use("/resources", resources_router);
router.use("/meet", meet_router);
router.use("/mentors", mentor_router);
export default router;
