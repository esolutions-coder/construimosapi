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
exports.getApuByCode = exports.getApuTransportation = exports.getApuApu = exports.addNewApu = exports.getApuWorkHand = exports.getApuEquipment = exports.getApuMaterials = exports.getApusByString = exports.getApuById = exports.getAllApus = void 0;
const apus_1 = __importDefault(require("../models/apus"));
const apus_2 = __importDefault(require("../models/apus"));
const equipment_1 = __importDefault(require("../models/equipment"));
const materials_1 = __importDefault(require("../models/materials"));
const transportation_1 = __importDefault(require("../models/transportation"));
const workhand_1 = __importDefault(require("../models/workhand"));
const deleteAccents_1 = __importDefault(require("../utils/deleteAccents"));
const newApu_checks_1 = __importDefault(require("../utils/newApu.checks"));
const getAllApus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apusList = yield apus_2.default.find();
        if (apusList) {
            res.json(apusList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getAllApus = getAllApus;
const getApuById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.id;
    try {
        const apusList = yield apus_2.default.findOne({ _id: apuId });
        if (apusList) {
            res.json(apusList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.status(400).json({ response: null });
    }
});
exports.getApuById = getApuById;
const getApusByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = req.params.queryString;
    const fixedQueryString = (0, deleteAccents_1.default)(queryString);
    const regexString = new RegExp(`${fixedQueryString}`, "i");
    try {
        const apusList = yield apus_2.default.find({ apu_name: { $regex: regexString } });
        if (apusList) {
            res.json(apusList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApusByString = getApusByString;
const getApuMaterials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.apuId;
    let materialNest = [];
    try {
        const apuInfo = yield apus_2.default.findById(apuId);
        if (apuInfo) {
            const materialList = apuInfo.apu_materials;
            for (let i = 0; i < materialList.length; i++) {
                let materialId = materialList[i].material_id;
                let materialInfo = yield materials_1.default.findOne({ material_code: materialId });
                materialNest.push(materialInfo);
            }
            res.json(materialNest);
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApuMaterials = getApuMaterials;
const getApuTransportation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.apuId;
    let transportationNest = [];
    try {
        const apuInfo = yield apus_2.default.findById(apuId);
        if (apuInfo) {
            const transportationList = apuInfo.apu_transportation;
            for (let i = 0; i < transportationList.length; i++) {
                let transportationId = transportationList[i].transportation_id;
                let transportationInfo = yield transportation_1.default.findOne({ transportation_code: transportationId });
                transportationNest.push(transportationInfo);
            }
            res.json(transportationNest);
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApuTransportation = getApuTransportation;
const getApuEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.apuId;
    let equipmentNest = [];
    try {
        const apuInfo = yield apus_2.default.findById(apuId);
        if (apuInfo) {
            const equipmentList = apuInfo.apu_equipment;
            for (let i = 0; i < equipmentList.length; i++) {
                let equipmentId = equipmentList[i].equipment_id;
                let equiopmentInfo = yield equipment_1.default.findOne({ equipment_code: equipmentId });
                equipmentNest.push(equiopmentInfo);
            }
            res.json(equipmentNest);
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApuEquipment = getApuEquipment;
const getApuWorkHand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.apuId;
    let workHandNest = [];
    try {
        const apuInfo = yield apus_2.default.findById(apuId);
        if (apuInfo) {
            const workHandList = apuInfo.apu_workHand;
            for (let i = 0; i < workHandList.length; i++) {
                let workHandId = workHandList[i].workHand_id;
                let workHandInfo = yield workhand_1.default.findOne({ workHand_code: workHandId });
                workHandNest.push(workHandInfo);
            }
            res.json(workHandNest);
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApuWorkHand = getApuWorkHand;
const getApuApu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuId = req.params.apuId;
    let apusNest = [];
    try {
        const apuInfo = yield apus_2.default.findById(apuId);
        if (apuInfo) {
            const subApuList = apuInfo.apu_apu;
            for (let i = 0; i < subApuList.length; i++) {
                let apudId = subApuList[i].apu_id;
                let apusInfo = yield apus_1.default.findOne({ apu_id: apudId });
                apusNest.push(apusInfo);
            }
            res.json(apusNest);
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getApuApu = getApuApu;
/**POST REQUESTS */
const addNewApu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apuData = req.body.apuData;
    try {
        const allApus = yield apus_1.default.find();
        const lastApu = allApus.length;
        const myApu = (0, newApu_checks_1.default)(apuData);
        const newApuCode = String(lastApu).padStart(5, '0');
        const createEntry = new apus_1.default(Object.assign(Object.assign({}, myApu), { apu_id: `APU${newApuCode}` }));
        yield createEntry.save();
        res.json(createEntry);
    }
    catch (err) {
        console.log(`${err}`);
        res.status(400).json({ response: `${err}` });
    }
});
exports.addNewApu = addNewApu;
const getApuByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apu_id = req.params.code;
    try {
        const apuFinded = yield apus_1.default.findOne({ apu_id });
        res.json(apuFinded);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getApuByCode = getApuByCode;
