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
exports.updateMaterial = exports.getMaterialByCode = exports.createMultipleMaterial = exports.getAllMaterials = exports.getMaterialByString = exports.getMaterialById = void 0;
const materials_1 = __importDefault(require("../models/materials"));
const check_materials_1 = __importDefault(require("../utils/check.materials"));
const getMaterialById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materialId = req.params.id;
    try {
        const material = yield materials_1.default.findById(materialId);
        res.json(material);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getMaterialById = getMaterialById;
const getMaterialByCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const material_code = req.params.code;
    try {
        const material = yield materials_1.default.findOne({ material_code });
        res.json(material);
    }
    catch (err) {
        res.json(`${err}`);
    }
});
exports.getMaterialByCode = getMaterialByCode;
const getMaterialByString = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i");
    try {
        const materialList = yield materials_1.default.find({ material_name: { $regex: regexString } });
        if (materialList) {
            res.json(materialList);
        }
        else {
            res.json({ response: "No se han podido encontrar" });
        }
    }
    catch (err) {
        res.json({ response: `${err}` });
    }
});
exports.getMaterialByString = getMaterialByString;
const getAllMaterials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fullMaterialList = yield materials_1.default.find();
        res.json(fullMaterialList);
    }
    catch (_a) {
        res.status(400).json({ response: "No se pudo encontrar" });
    }
});
exports.getAllMaterials = getAllMaterials;
const createMultipleMaterial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const multipleMaterialInfo = req.body.materialsData;
    let savedMaterials = 0;
    let repeatedCode = 0;
    try {
        for (let i = 0; i < multipleMaterialInfo.length; i++) {
            const singleMaterialInfo = multipleMaterialInfo[i];
            const currentCode = singleMaterialInfo.material_code;
            const existCode = yield materials_1.default.find({ material_code: currentCode });
            if (existCode.length === 0) {
                savedMaterials += 1;
                const newMaterial = (0, check_materials_1.default)(singleMaterialInfo);
                const registerMaterial = new materials_1.default(newMaterial);
                registerMaterial.save();
            }
            else {
                repeatedCode += 1;
            }
        }
        res.json({ response: `Se han almacenado ${savedMaterials} materiales en la base de datos, se encontraron ${repeatedCode} materiales con codigos repetidos` });
    }
    catch (err) {
        res.status(400).json({ response: `${err}` });
    }
});
exports.createMultipleMaterial = createMultipleMaterial;
const updateMaterial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const materialId = req.params.id;
    const materialFromClient = req.body;
    try {
        const materialInfo = (0, check_materials_1.default)(materialFromClient);
        const materialToUpdate = yield materials_1.default.findByIdAndUpdate(materialId, materialInfo, { useFindAndModify: true });
        res.json(materialToUpdate);
    }
    catch (err) {
        res.status(400).json(`${err}`);
    }
});
exports.updateMaterial = updateMaterial;
