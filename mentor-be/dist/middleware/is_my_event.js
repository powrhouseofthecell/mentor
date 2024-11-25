"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = is_my_event;
const events_1 = __importDefault(require("../models/entities/events"));
async function is_my_event(req, _res, next) {
    try {
        const { id: event_id } = req.params;
        const event = await events_1.default.findById(event_id);
        if (req.user._id.equals(event === null || event === void 0 ? void 0 : event.organised_by)) {
            next();
        }
        else
            throw new Error("you can not edit this event");
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=is_my_event.js.map