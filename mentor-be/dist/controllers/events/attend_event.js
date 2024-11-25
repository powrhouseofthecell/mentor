"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = attend_event;
const events_1 = __importDefault(require("../../models/entities/events"));
async function attend_event(req, res, next) {
    const { id } = req.params;
    const { _id } = req.user;
    try {
        const event = await events_1.default.updateOne({ _id: id }, { $addToSet: { attended_by: _id } });
        res.send({ event });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=attend_event.js.map