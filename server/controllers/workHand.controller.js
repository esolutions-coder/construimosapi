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
exports.updateWorkhand = exports.getWorkhandByCode = exports.createMultipleWorkhand = exports.getWorkHandByString = void 0;
const workhand_1 = __importDefault(require("../models/workhand"));
const check_workhand_1 = __importDefault(require("../utils/check.workhand"));
const getWorkHandByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i");
    try {
        const workHandList = yield workhand_1.default.find({ workHand_name: { $regex: regexString } });
        if (workHandList) {
            res.json(workHandList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getWorkHandByString = getWorkHandByString;
const createMultipleWorkhand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const multipleWorkhandInfo = req.body.workhandData;
    let savedWorkhand = 0;
    let repeatedCode = 0;
    try {
        for (let i = 0; i < multipleWorkhandInfo.length; i++) {
            const singleWorkhandInfo = multipleWorkhandInfo[i];
            const currentCode = singleWorkhandInfo.workHand_code;
            const existCode = yield workhand_1.default.find({ workHand_code: currentCode });
            if (existCode.length === 0) {
                savedWorkhand += 1;
                const newWorkhand = (0, check_workhand_1.default)(singleWorkhandInfo);
                const registerWorkhand = new workhand_1.default(newWorkhand);
                // registerWorkhand.save()
            }
            else {
                repeatedCode += 1;
            }
        }
        res.json({ response: `Se han almacenado ${savedWorkhand} Items de mano de obra en la base de datos, se encontraron ${repeatedCode} Items de Mano de obra con codigos repetidos` });
    }
    catch (err) {
        res.status(400).json({ response: `${err}` });
    }
});
exports.createMultipleWorkhand = createMultipleWorkhand;
const getWorkhandByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workHand_code = req.params.code;
    try {
        const workhandFinded = yield workhand_1.default.findOne({ workHand_code });
        res.json(workhandFinded);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getWorkhandByCode = getWorkhandByCode;
const updateWorkhand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workhandId = req.params.id;
    const workhandFromClient = req.body;
    try {
        const workhandInfo = (0, check_workhand_1.default)(workhandFromClient);
        const workhandToUpdate = yield workhand_1.default.findByIdAndUpdate(workhandId, workhandInfo, { useFindAndModify: true });
        res.json(workhandToUpdate);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
});
exports.updateWorkhand = updateWorkhand;
