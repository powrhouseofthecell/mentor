"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = create_db_con;
const mongoose_1 = __importDefault(require("mongoose"));
async function create_db_con(url) {
    try {
        await mongoose_1.default.connect(url);
    }
    catch (error) {
        throw new Error(error);
    }
}
//# sourceMappingURL=create_con.js.map