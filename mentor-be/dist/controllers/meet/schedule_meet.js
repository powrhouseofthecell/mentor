"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schedule_meet;
const user_1 = __importDefault(require("../../models/entities/user"));
const mongoose_1 = __importDefault(require("mongoose"));
async function schedule_meet(req, res, next) {
    try {
        let { mentor_id } = req.params;
        mentor_id = mentor_id.toString();
        if (mongoose_1.default.Types.ObjectId.isValid(mentor_id)) {
            const mentor = await user_1.default.findById(mentor_id);
            res.send(mentor);
        }
        else
            throw new Error("not a valid ObjectId");
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=schedule_meet.js.map