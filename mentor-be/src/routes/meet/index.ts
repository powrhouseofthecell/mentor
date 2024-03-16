import express from "express";
import meet_controller from "../../controllers/meet";
import auth_controller from "../../controllers/auth";

const router = express.Router();
// Should be have two entities mentors and mentees
router.post(
  "/:mentor_id",
  auth_controller.protect,
  meet_controller.schedule_meet,
);

export default router;
