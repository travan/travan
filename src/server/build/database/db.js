"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesEnv_1 = require("../ultils/accesEnv");
const mongoose_1 = __importDefault(require("mongoose"));
// MongoDB connection URL
const mongoURI = `${accesEnv_1.dbUrl}${accesEnv_1.dbName}?retryWrites=true&w=majority` || "";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(mongoURI);
    // Get the default connection
    const db = mongoose_1.default.connection;
    // Event listener for successful connection
    db.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    // Event listener for connection error
    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
});
// Export the mongoose connection
exports.default = connectDB;
