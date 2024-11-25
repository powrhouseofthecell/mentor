"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = update;
const events_1 = __importDefault(require("../../models/entities/events"));
async function update(req, res, _next) {
    const { id } = req.params;
    try {
        const event = await events_1.default.find({ _id: id }).populate({
            path: "attended_by",
            model: "User",
        });
        res.send(event);
    }
    catch (error) {
        throw new Error(error);
    }
}
//# sourceMappingURL=get_event.js.map