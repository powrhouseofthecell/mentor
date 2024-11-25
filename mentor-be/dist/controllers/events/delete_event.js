"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = delete_event;
const events_1 = __importDefault(require("../../models/entities/events"));
async function delete_event(req, res, next) {
    const { id } = req.params;
    try {
        await events_1.default.findByIdAndDelete(id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=delete_event.js.map