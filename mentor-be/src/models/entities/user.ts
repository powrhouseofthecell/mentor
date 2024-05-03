import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

// TODO: Write a validator for email.

const user_schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "email is already registered"],
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
    // Mentees that are following a mentor
    type: [mongoose.Types.ObjectId],
    ref: "User",
    default: [],
  },
  mentors: {
    // Mentors that a mentee follows
    type: [mongoose.Types.ObjectId],
    ref: "User",
    default: [],
  },
  connect_request: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
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
