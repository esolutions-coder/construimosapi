"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueParser = exports.isNumber = exports.isString = void 0;
const isString = (string) => {
    return typeof string === "string";
};
exports.isString = isString;
const isNumber = (number) => {
    return typeof number === "number";
};
exports.isNumber = isNumber;
const valueParser = (type, errorDescription, value) => {
    if (type === "string") {
        if (!(0, exports.isString)(value)) {
            throw new Error(`${errorDescription}`);
        }
        return value;
    }
    if (type === "number") {
        if (!(0, exports.isNumber)(value)) {
            throw new Error(`${errorDescription}`);
        }
        return value;
    }
};
exports.valueParser = valueParser;
