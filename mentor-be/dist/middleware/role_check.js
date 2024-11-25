"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = role_check;
function role_check(req, _res, next) {
    try {
        if (req.user.role === "admin" || req.user.role === "mentor") {
            next();
        }
        else {
            throw new Error("only admins or mentors can perform this action.");
        }
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=role_check.js.map