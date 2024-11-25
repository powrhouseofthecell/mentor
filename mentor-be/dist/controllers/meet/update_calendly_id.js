"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = update_calendly_id;
const user_1 = __importDefault(require("../../models/entities/user"));
async function update_calendly_id(req, res, next) {
    try {
        const { calendly_id } = req.body;
        const link = `https://calendly.com/${calendly_id}`;
        if (req.user._id) {
            await user_1.default.findByIdAndUpdate(req.user._id, {
                calendly_id: link,
            });
            res.send({
                error: false,
                message: "id updated successfully",
            });
        }
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=update_calendly_id.js.map