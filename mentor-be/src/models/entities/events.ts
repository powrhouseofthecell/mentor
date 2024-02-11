import { Schema, model } from 'mongoose';

const event_schema = new Schema({
  event_name: {
    type: String,
  },
  event_date: {
    type: String,
  },
});

const Event = model('Event', event_schema);
export default Event;
