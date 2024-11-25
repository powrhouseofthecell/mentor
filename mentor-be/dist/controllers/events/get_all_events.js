"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get_all_events;
const events_1 = __importDefault(require("../../models/entities/events"));
async function get_all_events(_req, res, next) {
    try {
        const events = await events_1.default.find({})
            .populate("organised_by")
            .populate("attended_by");
        res.send({
            status: "success",
            data: events,
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=get_all_events.js.map