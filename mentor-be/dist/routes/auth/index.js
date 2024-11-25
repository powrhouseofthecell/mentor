"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("../../controllers/auth"));
router.route("/signup").post(auth_1.default.signup);
router.route("/login").post(auth_1.default.login);
router.route("/logout").post(auth_1.default.logout);
exports.default = router;
//# sourceMappingURL=index.js.map