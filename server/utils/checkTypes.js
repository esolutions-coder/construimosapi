"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isString = void 0;
const isString = (string) => {
    return typeof string === "string";
};
exports.isString = isString;
const isNumber = (number) => {
    return typeof number === "number";
};
exports.isNumber = isNumber;
