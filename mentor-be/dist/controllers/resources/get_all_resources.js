"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = get_all_resources;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function get_all_resources(_req, res, _next) {
    const path_down = path_1.default.join(__dirname, "../../public/uploads");
    fs_1.default.readdir(path_down, (err, files) => {
        if (err) {
            return;
        }
        files = files.filter((file) => fs_1.default.statSync(path_1.default.join(path_down, file)).isFile());
        const file_details = files.map((file) => {
            return {
                name: file,
                type: path_1.default.extname(file).slice(1),
            };
        });
        res.json(file_details);
    });
}
//# sourceMappingURL=get_all_resources.js.map