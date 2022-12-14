"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = chekNewUser;
