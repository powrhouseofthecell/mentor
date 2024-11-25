"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = __importDefault(require("./auth"));
const event_1 = __importDefault(require("./event"));
const resources_1 = __importDefault(require("./resources"));
const meet_1 = __importDefault(require("./meet"));
const mentors_1 = __importDefault(require("./mentors"));
router.use("/auth", auth_1.default);
router.use("/events", event_1.default);
router.use("/resources", resources_1.default);
router.use("/meet", meet_1.default);
router.use("/mentors", mentors_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map