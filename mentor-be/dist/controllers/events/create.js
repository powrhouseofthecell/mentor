"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = create;
const events_1 = __importDefault(require("../../models/entities/events"));
async function create(req, res, next) {
    try {
        let { event_name, event_date, event_description } = req.body;
        const to = new Date(event_date.to).toDateString();
        const from = new Date(event_date.from).toDateString();
        event_date = {
            to,
            from,
        };
        const user_id = req.user._id.toString();
        const event = await events_1.default.create({
            event_name,
            event_date,
            event_description,
            organised_by: user_id,
        });
        res.send({
            status: "success",
            data: event,
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=create.js.map