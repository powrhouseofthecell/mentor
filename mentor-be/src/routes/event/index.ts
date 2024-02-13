import express from "express";
const router = express.Router();

import events_controller from "../../controllers/events";
import auth_controller from "../../controllers/auth";
import middlewares from "../../middleware/";

// router.post('/create', auth_controller.protect, events_controller.create);
// router.route('/create').post(auth_controller.protect, events_controller.create);

router.get(
  "/",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.get_all_events,
);
router.post(
  "/create",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.create,
);
router.put(
  "/update/:id",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.update,
);

router.delete(
  "/update/:id",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.delete_event,
);

export default router;
