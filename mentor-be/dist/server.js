"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const create_con_1 = __importDefault(require("./utils/db/create_con"));
const DB_URI = (_a = process.env.DB_URI) === null || _a === void 0 ? void 0 : _a.replace("<db_password>", process.env.DB_PASSWORD);
const HTTP_PORT = process.env.HTTP_PORT;
const HTTPS_PORT = process.env.HTTPS_PORT;
const SSL_CERT_PATH = process.env.SSL_CERT_PATH;
const key_file_path = path_1.default.join(SSL_CERT_PATH, "key.pem");
const cert_file_path = path_1.default.join(SSL_CERT_PATH, "cert.pem");
const http_server = http_1.default.createServer(app_1.default);
const https_server = https_1.default.createServer({
    key: fs_1.default.readFileSync(key_file_path),
    cert: fs_1.default.readFileSync(cert_file_path),
}, app_1.default);
(0, create_con_1.default)(DB_URI)
    .then(() => {
    console.log("✔︎ DB Connected");
    http_server.listen(HTTP_PORT, () => {
        console.log(`🚀 http server started on port ${HTTP_PORT}`);
    });
    https_server.listen(HTTPS_PORT, () => {
        console.log(`🔐 https server started on port ${HTTPS_PORT}`);
    });
})
    .catch((err) => {
    console.log("DB not connected", err);
});
//# sourceMappingURL=server.js.map