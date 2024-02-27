import mongoose, { Schema, model } from "mongoose";

const event_schema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  event_description: {
    type: String,
    required: true,
  },
  event_date: {
    type: String,
    required: true,
  },
  organised_by: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  attended_by: {
    type: Array,
    default: [],
  },
});

const Event = model("Event", event_schema);
export default Event;
