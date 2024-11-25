"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = protect;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../../models/entities/user"));
async function protect(req, _res, next) {
    let token = null;
    try {
        if (req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer"))
            token = req.headers.authorization.split(" ")[1];
        else if (req.cookies.auth_token)
            token = req.cookies.auth_token;
        if (!token)
            throw new Error("You are not authenticated, please login to get access");
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const decoded = jsonwebtoken_1.default.decode(token);
        const id = decoded.userid;
        const user = await user_1.default.findById(id);
        if (user) {
            req.user = user;
            next();
        }
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=protect.js.map