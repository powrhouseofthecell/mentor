"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = follow_mentor;
const user_1 = __importDefault(require("../../models/entities/user"));
async function follow_mentor(req, res, next) {
    const { id: mentor_id } = req.params;
    try {
        const result = await user_1.default.updateOne({ _id: mentor_id }, { $addToSet: { connect_request: req.user._id } });
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=follow_req_mentor.js.map