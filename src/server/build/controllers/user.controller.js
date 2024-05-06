"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.registerUserController = void 0;
const authenticate_1 = require("../middleware/authenticate");
// Controller function to handle user registration
const registerUserController = (req, res) => {
    (0, authenticate_1.registerUser)(req, res);
};
exports.registerUserController = registerUserController;
// Controller function to handle user login
const loginUserController = (req, res) => {
    (0, authenticate_1.loginUser)(req, res);
};
exports.loginUserController = loginUserController;
