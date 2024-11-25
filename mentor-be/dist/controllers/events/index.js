"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./create"));
const get_all_events_1 = __importDefault(require("./get_all_events"));
const update_event_1 = __importDefault(require("./update_event"));
const delete_event_1 = __importDefault(require("./delete_event"));
const attend_event_1 = __importDefault(require("./attend_event"));
const get_all_user_events_1 = __importDefault(require("./get_all_user_events"));
const get_event_1 = __importDefault(require("./get_event"));
const events_controller = {
    create: create_1.default,
    get_all_events: get_all_events_1.default,
    update: update_event_1.default,
    delete_event: delete_event_1.default,
    attend_event: attend_event_1.default,
    get_all_user_events: get_all_user_events_1.default,
    get_event: get_event_1.default,
};
exports.default = events_controller;
//# sourceMappingURL=index.js.map