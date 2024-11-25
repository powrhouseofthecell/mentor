"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = download;
const path_1 = __importDefault(require("path"));
function download(req, res, _next) {
    const { filename } = req.params;
    const path_down = path_1.default.join(__dirname, '../../public/uploads', filename);
    res.download(path_down);
}
//# sourceMappingURL=download.js.map