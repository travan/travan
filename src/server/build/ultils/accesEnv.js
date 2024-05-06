"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbName = exports.dbUrl = exports.jwtSecret = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = path_1.default.resolve(process.cwd(), '.env');
dotenv_1.default.config({ path: envPath });
exports.jwtSecret = process.env.JWT_SECRET;
exports.dbUrl = process.env.MONGO_URI;
exports.dbName = process.env.MONGO_DB;
