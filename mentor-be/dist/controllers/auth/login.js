"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = login;
const user_1 = __importDefault(require("../../models/entities/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function sign_access_token(userid) {
    const token = jsonwebtoken_1.default.sign({ userid }, process.env.JWT_SECRET, {
        expiresIn: "4d",
    });
    return token;
}
async function login(req, res, next) {
    let { email, password } = req.body;
    try {
        email = email.toLowerCase();
        const user = await user_1.default.findOne({ email });
        if (!user)
            throw new Error("user not found, please signup");
        const match = await bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!match)
            throw new Error("email or password is incorrect");
        const token = sign_access_token(user === null || user === void 0 ? void 0 : user._id);
        const expires_in = process.env.TOKEN_COOKIE_EXPIRES_IN;
        const cookie_options = {
            expires: new Date(Date.now() + expires_in * 86400000),
            httpOnly: true,
            secure: true,
            sameSite: "none",
        };
        res.cookie("auth_token", token, cookie_options);
        req.user = user;
        res.send(user);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=login.js.map