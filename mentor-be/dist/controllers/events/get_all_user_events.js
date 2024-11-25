"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get_all_user_events;
const events_1 = __importDefault(require("../../models/entities/events"));
async function get_all_user_events(req, res, next) {
    const user_id = req.user._id;
    try {
        const events_by_user = await events_1.default.find({ organised_by: user_id });
        res.send(events_by_user);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=get_all_user_events.js.map