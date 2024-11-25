"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schedule_meet_1 = __importDefault(require("./schedule_meet"));
const update_calendly_id_1 = __importDefault(require("./update_calendly_id"));
const meet_controller = {
    schedule_meet: schedule_meet_1.default,
    update_calendly_id: update_calendly_id_1.default,
};
exports.default = meet_controller;
//# sourceMappingURL=index.js.map