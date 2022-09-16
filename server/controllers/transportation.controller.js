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
exports.updateTransportation = exports.getTransportationByCode = exports.createMultipleTransportation = exports.getTransportationByString = void 0;
const transportation_1 = __importDefault(require("../models/transportation"));
const check_transportation_1 = __importDefault(require("../utils/check.transportation"));
const getTransportationByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i");
    try {
        const transportationLIst = yield transportation_1.default.find({ transportation_name: { $regex: regexString } });
        if (transportationLIst) {
            res.json(transportationLIst);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getTransportationByString = getTransportationByString;
const createMultipleTransportation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const multipleTransportationInfo = req.body.transportationData;
    let savedTransportation = 0;
    let repeatedCode = 0;
    try {
        for (let i = 0; i < multipleTransportationInfo.length; i++) {
            const singleTransportation = multipleTransportationInfo[i];
            const currentCode = singleTransportation.transportation_code;
            const existCode = yield transportation_1.default.find({ transportation_code: currentCode });
            if (existCode.length === 0) {
                savedTransportation += 1;
                const newTransportation = (0, check_transportation_1.default)(singleTransportation);
                const registerTransportation = new transportation_1.default(newTransportation);
                registerTransportation.save();
            }
            else {
                repeatedCode += 1;
            }
        }
        res.json({ response: `Se han almacenado ${savedTransportation} Items de mano de obra en la base de datos, se encontraron ${repeatedCode} Items de Mano de obra con codigos repetidos` });
    }
    catch (err) {
        res.status(400).json({ response: `${err}` });
    }
});
exports.createMultipleTransportation = createMultipleTransportation;
const getTransportationByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transportation_code = req.params.code;
    try {
        const transportationFinded = yield transportation_1.default.findOne({ transportation_code });
        res.json(transportationFinded);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getTransportationByCode = getTransportationByCode;
const updateTransportation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transportationId = req.params.id;
    const transportationFromClient = req.body;
    console.log(transportationFromClient, transportationId);
    try {
        const transportationInfo = (0, check_transportation_1.default)(transportationFromClient);
        const transportationToUpdate = yield transportation_1.default.findByIdAndUpdate(transportationId, transportationInfo, { useFindAndModify: false });
        res.json(transportationToUpdate);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
});
exports.updateTransportation = updateTransportation;
