"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = update;
const events_1 = __importDefault(require("../../models/entities/events"));
async function update(req, res, _next) {
    const { id } = req.params;
    let { event_name, event_date, event_description } = req.body;
    const to = new Date(event_date.to).toDateString();
    const from = new Date(event_date.from).toDateString();
    event_date = {
        to,
        from,
    };
    try {
        const e = await events_1.default.findByIdAndUpdate(id, {
            event_name,
            event_date,
            event_description,
        });
        res.send(e);
    }
    catch (error) {
        throw new Error(error);
    }
}
//# sourceMappingURL=update_event.js.map