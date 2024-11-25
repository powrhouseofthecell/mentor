"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_1 = __importDefault(require("./upload"));
const get_all_resources_1 = __importDefault(require("./get_all_resources"));
const download_1 = __importDefault(require("./download"));
const resources_controller = {
    get_all_resources: get_all_resources_1.default,
    upload: upload_1.default,
    download: download_1.default,
};
exports.default = resources_controller;
//# sourceMappingURL=index.js.map