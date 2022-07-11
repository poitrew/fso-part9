"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnoseService_1 = __importDefault(require("../services/diagnoseService"));
const diagnoseRouter = express_1.default.Router();
diagnoseRouter.get('/', (_req, res) => {
    const result = diagnoseService_1.default.getAll();
    res.json(result);
});
exports.default = diagnoseRouter;
