"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("../../controllers/auth"));
const mentor_1 = __importDefault(require("../../controllers/mentor"));
const middleware_1 = __importDefault(require("../../middleware"));
router.get("/", auth_1.default.protect, mentor_1.default.get_all_mentors);
router.get("/:id", auth_1.default.protect, mentor_1.default.get_mentor);
router.post("/follow/:id", auth_1.default.protect, mentor_1.default.follow_mentor);
router.post("/accept", auth_1.default.protect, middleware_1.default.role_check, mentor_1.default.accept_req);
exports.default = router;
//# sourceMappingURL=index.js.map