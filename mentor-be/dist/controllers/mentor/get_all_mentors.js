"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get_all_mentors;
const user_1 = __importDefault(require("../../models/entities/user"));
async function get_all_mentors(_req, res, next) {
    try {
        const mentors = await user_1.default.find({ role: "mentor" });
        res.send(mentors);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=get_all_mentors.js.map