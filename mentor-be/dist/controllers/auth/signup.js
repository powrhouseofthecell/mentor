"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signup;
const user_1 = __importDefault(require("../../models/entities/user"));
async function signup(req, res, next) {
    let { name, email, password } = req.body;
    if (name && email && password) {
        try {
            email = email.toLowerCase();
            const user = await user_1.default.create({ name, email, password });
            res.send(user);
        }
        catch (error) {
            next(error);
        }
    }
    else {
        res.status(400).json({
            message: "name, email and password are required",
            status: res.status
        });
    }
}
//# sourceMappingURL=signup.js.map