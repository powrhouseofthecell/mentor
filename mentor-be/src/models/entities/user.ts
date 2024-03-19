import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// TODO: Write a validator for email.

const user_schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["mentor", "mentee", "admin"],
    default: "mentee",
  },
  calendly_id: {
    type: String,
  },
  mentees: {
    type: Array,
    default: [],
  },
  mentors: {
    type: Array,
    default: [],
  },
});

user_schema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password as string, salt);
  next();
});

const User = model("User", user_schema);

export default User;
