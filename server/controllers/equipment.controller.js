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
exports.updateEquipment = exports.getEquipmentByCode = exports.createMultipleEquipment = exports.getEquipmentByString = void 0;
const equipment_1 = __importDefault(require("../models/equipment"));
const check_equipment_1 = __importDefault(require("../utils/check.equipment"));
const getEquipmentByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i");
    try {
        const equipmentList = yield equipment_1.default.find({ equipment_name: { $regex: regexString } });
        if (equipmentList) {
            res.json(equipmentList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getEquipmentByString = getEquipmentByString;
const createMultipleEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const multipleEquipmentInfo = req.body.equipmentsData;
    let savedEquipment = 0;
    let repeatedCode = 0;
    try {
        for (let i = 0; i < multipleEquipmentInfo.length; i++) {
            const singleEquipmentInfo = multipleEquipmentInfo[i];
            const currentCode = singleEquipmentInfo.equipment_code;
            const existCode = yield equipment_1.default.find({ material_code: currentCode });
            if (existCode.length === 0) {
                savedEquipment += 1;
                const newEquipment = (0, check_equipment_1.default)(singleEquipmentInfo);
                const registerEquipment = new equipment_1.default(newEquipment);
                registerEquipment.save();
            }
            else {
                repeatedCode += 1;
            }
        }
        res.json({ response: `Se han almacenado ${savedEquipment} Equipos en la base de datos, se encontraron ${repeatedCode} Equipos con codigos repetidos` });
    }
    catch (err) {
        res.status(400).json({ response: `${err}` });
    }
});
exports.createMultipleEquipment = createMultipleEquipment;
const getEquipmentByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipment_code = req.params.code;
    try {
        const equipmentFinded = yield equipment_1.default.findOne({ equipment_code });
        res.json(equipmentFinded);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getEquipmentByCode = getEquipmentByCode;
const updateEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equipmentId = req.params.id;
    const equipmentFromClient = req.body;
    try {
        const equipmentInfo = (0, check_equipment_1.default)(equipmentFromClient);
        const equipmentToUpdate = yield equipment_1.default.findByIdAndUpdate(equipmentId, equipmentInfo, { useFindAndModify: true });
        res.json(equipmentToUpdate);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
});
exports.updateEquipment = updateEquipment;
