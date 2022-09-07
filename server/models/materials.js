"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialsSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const MaterialsSchema = new mongoose_1.Schema({
    material_name: { type: String, required: true },
    material_unitary_price: { type: Number, required: true },
    material_provider: { type: String, required: true },
    material_code: { type: String, required: true },
    material_unit: { type: String, required: true },
    material_rud: { type: Number, required: true },
    material_category: { type: String, required: true }
});
exports.MaterialsSchema = MaterialsSchema;
exports.default = mongoose_1.default.model("materials", MaterialsSchema);
