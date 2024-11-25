"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_2 = __importDefault(require("mongoose"));
const user_schema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, "email is already registered"],
    },
    password: {
        type: String,
        minlength: [6, "password must be atleast 6 characters long"]
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
        type: [mongoose_2.default.Types.ObjectId],
        ref: "User",
        default: [],
    },
    mentors: {
        type: [mongoose_2.default.Types.ObjectId],
        ref: "User",
        default: [],
    },
    connect_request: {
        type: [mongoose_2.default.Types.ObjectId],
        ref: "User",
        default: [],
    },
});
user_schema.pre("save", async function (next) {
    const salt = await bcrypt_1.default.genSalt(10);
    this.password = await bcrypt_1.default.hash(this.password, salt);
    next();
});
const User = (0, mongoose_1.model)("User", user_schema);
exports.default = User;
//# sourceMappingURL=user.js.map