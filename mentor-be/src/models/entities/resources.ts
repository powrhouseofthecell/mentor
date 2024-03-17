import { Schema, model } from "mongoose";

const resource_schema = new Schema({
  resource_url: {
    // upload this to cloudflare/s3
    type: String,
    required: true,
  },
  tag: {
    type: String,
    enum: ["programming", "compiler design", "network security", "dsa"],
  },
});

const resource = model("resource", resource_schema);

export default resource;
