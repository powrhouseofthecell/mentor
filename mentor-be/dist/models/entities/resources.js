"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const resource_schema = new mongoose_1.Schema({
    resource_url: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        enum: ["programming", "compiler design", "network security", "dsa"],
    },
});
const resource = (0, mongoose_1.model)("resource", resource_schema);
exports.default = resource;
//# sourceMappingURL=resources.js.map