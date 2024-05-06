"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_router_1 = __importDefault(require("./router/user.router"));
const db_1 = __importDefault(require("./database/db"));
const app = (0, express_1.default)();
const PORT = 3000;
(0, db_1.default)();
app.use(body_parser_1.default.json());
// Use user routes
app.use('/api/users', user_router_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
