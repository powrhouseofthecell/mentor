"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const resources_1 = __importDefault(require("../../controllers/resources"));
const auth_1 = __importDefault(require("../../controllers/auth"));
const upload_path = path_1.default.join(__dirname, "../../public/uploads");
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, upload_path);
    },
    filename: (_req, file, cb) => {
        cb(null, file.originalname);
    },
});
const uploadStorage = (0, multer_1.default)({ storage: storage });
router.get("/", auth_1.default.protect, resources_1.default.get_all_resources);
router.post("/upload", auth_1.default.protect, uploadStorage.single("file"), resources_1.default.upload);
router.get("/download/:filename", auth_1.default.protect, resources_1.default.download);
exports.default = router;
//# sourceMappingURL=index.js.map