"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_all_mentors_1 = __importDefault(require("./get_all_mentors"));
const get_mentor_1 = __importDefault(require("./get_mentor"));
const follow_req_mentor_1 = __importDefault(require("./follow_req_mentor"));
const accept_connect_req_1 = __importDefault(require("./accept_connect_req"));
const mentor_controller = {
    get_all_mentors: get_all_mentors_1.default,
    get_mentor: get_mentor_1.default,
    follow_mentor: follow_req_mentor_1.default,
    accept_req: accept_connect_req_1.default,
};
exports.default = mentor_controller;
//# sourceMappingURL=index.js.map