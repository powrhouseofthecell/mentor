"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const events_1 = __importDefault(require("../../controllers/events"));
const auth_1 = __importDefault(require("../../controllers/auth"));
const middleware_1 = __importDefault(require("../../middleware/"));
router.get("/", auth_1.default.protect, events_1.default.get_all_events);
router.get("/user", auth_1.default.protect, events_1.default.get_all_user_events);
router.get("/:id", auth_1.default.protect, middleware_1.default.role_check, middleware_1.default.is_my_event, events_1.default.get_event);
router.post("/create", auth_1.default.protect, middleware_1.default.role_check, events_1.default.create);
router.put("/:id", auth_1.default.protect, middleware_1.default.role_check, middleware_1.default.is_my_event, events_1.default.update);
router.delete("/:id", auth_1.default.protect, middleware_1.default.role_check, events_1.default.delete_event);
router.post("/attend/:id", auth_1.default.protect, events_1.default.attend_event);
exports.default = router;
//# sourceMappingURL=index.js.map