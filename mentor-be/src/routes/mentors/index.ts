import express from "express";
const router = express.Router();

import auth_controller from "../../controllers/auth";
import mentor_controller from "../../controllers/mentor";

router.get("/", auth_controller.protect, mentor_controller.get_all_mentors);
router.get("/:id", auth_controller.protect, mentor_controller.get_mentor);

export default router;
