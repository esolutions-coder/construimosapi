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
exports.loginUser = exports.createNewUser = void 0;
const users_checks_1 = require("../utils/users.checks");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../models/users"));
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = (0, users_checks_1.chekNewUser)(req.body.userData);
        const registerUser = new users_1.default(userInfo);
        yield registerUser.save();
        res.json(registerUser);
    }
    catch (err) {
        res.status(400).json({ response: `${err}` });
    }
});
exports.createNewUser = createNewUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verify = yield (0, users_checks_1.checkCredentials)(req.body);
        if (verify) {
            const authenticatedUser = {
                username: "miguel",
                role: "admin"
            };
            const token = jsonwebtoken_1.default.sign(authenticatedUser, "secret");
            const userWithToken = {
                username: authenticatedUser.username,
                role: authenticatedUser.role,
                token
            };
            res.json(userWithToken);
        }
        else {
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.loginUser = loginUser;
