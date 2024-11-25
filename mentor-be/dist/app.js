"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./routes/router"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", router_1.default);
app.use((err, _req, res, _next) => {
    if (err.keyValue.event_name) {
        res
            .status(400)
            .send({ error: true, message: "An event with the same name already exists" });
    }
    if (err.message.includes("E11000 duplicate key error collection")) {
        res
            .status(400)
            .send({ error: true, message: "Email is already registered" });
    }
    res.status(400).send({ error: true, message: err.message });
});
exports.default = app;
//# sourceMappingURL=app.js.map