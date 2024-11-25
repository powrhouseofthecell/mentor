"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logout;
function logout(_req, res, _next) {
    res.clearCookie("auth_token");
    return res.status(200).json({
        status: "success",
        message: "logout successfully",
    });
}
//# sourceMappingURL=logout.js.map