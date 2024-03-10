import express from "express";
const router = express.Router();

import events_controller from "../../controllers/events";
import auth_controller from "../../controllers/auth";
import middlewares from "../../middleware/";

// router.post('/create', auth_controller.protect, events_controller.create);
// router.route('/create').post(auth_controller.protect, events_controller.create);

// TODO: Also create a get_all_user_events route. This route should give all the events
// that are created by that user.

router.get(
  "/",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.get_all_events,
);

router.get(
  "/user",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.get_all_user_events,
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

router.post(
  "/attend/:id",
  auth_controller.protect,
  middlewares.role_check,
  events_controller.attend_event,
);

export default router;
