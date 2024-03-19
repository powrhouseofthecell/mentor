import express from "express";
import meet_controller from "../../controllers/meet";
import auth_controller from "../../controllers/auth";
import middlewares from "../../middleware";

const router = express.Router();

router.post(
  "/link",
  auth_controller.protect,
  meet_controller.update_calendly_id,
);

router.post(
  "/:mentor_id",
  auth_controller.protect,
  middlewares.role_check,
  meet_controller.schedule_meet,
);

export default router;
