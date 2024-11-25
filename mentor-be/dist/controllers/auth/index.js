"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signup_1 = __importDefault(require("./signup"));
const login_1 = __importDefault(require("./login"));
const logout_1 = __importDefault(require("./logout"));
const protect_1 = __importDefault(require("./protect"));
const auth_controller = {
    signup: signup_1.default,
    login: login_1.default,
    logout: logout_1.default,
    protect: protect_1.default,
};
exports.default = auth_controller;
//# sourceMappingURL=index.js.map