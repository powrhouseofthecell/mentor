"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get_mentor;
const user_1 = __importDefault(require("../../models/entities/user"));
async function get_mentor(req, res, next) {
    const { id: mentor_id } = req.params;
    try {
        const mentor = await user_1.default.find({ _id: mentor_id })
            .populate("mentees")
            .populate("mentors")
            .populate("connect_request");
        res.send(mentor);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=get_mentor.js.map