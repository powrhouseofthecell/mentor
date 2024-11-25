"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = accept_request;
const user_1 = __importDefault(require("../../models/entities/user"));
const mongoose_1 = __importDefault(require("mongoose"));
async function accept_request(req, res, next) {
    let { mentee_id } = req.body;
    try {
        mentee_id = mongoose_1.default.Types.ObjectId.createFromHexString(mentee_id);
        await user_1.default.updateOne({ _id: req.user._id }, {
            $pull: { connect_request: mentee_id },
            $addToSet: { mentees: mentee_id },
        });
        await user_1.default.updateOne({ _id: mentee_id }, {
            $addToSet: { mentors: req.user._id },
        });
        res.send({
            error: false,
            message: "Request accepted",
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=accept_connect_req.js.map