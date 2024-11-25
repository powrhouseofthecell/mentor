"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_check_1 = __importDefault(require("./role_check"));
const is_my_event_1 = __importDefault(require("./is_my_event"));
const middlewares = {
    role_check: role_check_1.default,
    is_my_event: is_my_event_1.default,
};
exports.default = middlewares;
//# sourceMappingURL=index.js.map