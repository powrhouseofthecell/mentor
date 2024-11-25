"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const meet_1 = __importDefault(require("../../controllers/meet"));
const auth_1 = __importDefault(require("../../controllers/auth"));
const middleware_1 = __importDefault(require("../../middleware"));
const router = express_1.default.Router();
router.post("/link", auth_1.default.protect, meet_1.default.update_calendly_id);
router.post("/:mentor_id", auth_1.default.protect, middleware_1.default.role_check, meet_1.default.schedule_meet);
exports.default = router;
//# sourceMappingURL=index.js.map