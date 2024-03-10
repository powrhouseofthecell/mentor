import create from "./create";
import get_all_events from "./get_all_events";
import update from "./update_event";
import delete_event from "./delete_event";
import attend_event from "./attend_event";
import get_all_user_events from "./get_all_user_events";

const events_controller = {
  create,
  get_all_events,
  update,
  delete_event,
  attend_event,
  get_all_user_events,
};

export default events_controller;
