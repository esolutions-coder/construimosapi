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
exports.getMaterialByString = exports.getMaterialById = void 0;
const materials_1 = __importDefault(require("../models/materials"));
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
