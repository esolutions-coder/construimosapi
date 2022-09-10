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
exports.checkCredentials = exports.chekNewUser = void 0;
const checkTypes_1 = require("./checkTypes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const enums_1 = require("../enums");
const parseUsername = (userNameFromForm) => {
    if (!(0, checkTypes_1.isString)(userNameFromForm)) {
        throw new Error("Nombre de usuario incorrecto");
    }
    return userNameFromForm;
};
const parsePassword = (passwordFromForm) => {
    if (!(0, checkTypes_1.isString)(passwordFromForm)) {
        throw new Error("Contraseña incorrecta");
    }
    //hash password and return it
    const hash = bcrypt_1.default.hashSync(passwordFromForm, 10);
    return hash;
};
const isAllowedRole = (roleFromForm) => {
    return Object.values(enums_1.UserRoles).includes(roleFromForm);
};
const parseRole = (roleFromForm) => {
    if (!isAllowedRole(roleFromForm)) {
        throw new Error("Categoría inválida");
    }
    return roleFromForm;
};
const isEmail = (emailFromForm) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isemail = emailRegex.test(emailFromForm);
    return isemail;
};
const parseEmail = (emailFromForm) => {
    if (!isEmail(emailFromForm)) {
        throw new Error("Email inválido");
    }
    return emailFromForm;
};
const parseLoginPassword = (passwordFromForm) => {
    if (!(0, checkTypes_1.isString)(passwordFromForm)) {
        throw new Error("Contraseña incorrecta");
    }
    return passwordFromForm;
};
function chekNewUser(userInfo) {
    const username = parseUsername(userInfo.username);
    const password = parsePassword(userInfo.password);
    const role = parseRole(userInfo.role);
    const email = parseEmail(userInfo.email);
    return {
        username,
        password,
        role,
        email
    };
}
exports.chekNewUser = chekNewUser;
function checkCredentials(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const myUsername = "miguel";
        const myPassword = "$2b$10$Cp1pYo916BAXN5cRuwt3Qed9eZcsP4Y8YHZw1VhscZXKcgt9B3ggO";
        const username = parseUsername(userInfo.username);
        const password = parseLoginPassword(userInfo.password);
        const match = yield bcrypt_1.default.compare(password, myPassword);
        return match;
    });
}
exports.checkCredentials = checkCredentials;
