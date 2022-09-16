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
const mongoose_1 = __importStar(require("mongoose"));
const ApuGeneralMaterials = new mongoose_1.Schema({
    material_id: { type: String, required: true },
    material_amount: { type: Number, required: true }
});
const ApuGeneralEquipment = new mongoose_1.Schema({
    equipment_id: { type: String, required: true },
    equipment_amount: { type: Number, required: true }
});
const ApuGeneralWorkHand = new mongoose_1.Schema({
    workHand_id: { type: String, required: true },
    workHand_amount: { type: Number, required: true }
});
const ApuGeneralTransportation = new mongoose_1.Schema({
    transportation_id: { type: String, required: true },
    transportation_amount: { type: Number, required: true }
});
const ApuGeneralApu = new mongoose_1.Schema({
    apu_id: { type: String, required: true },
    apu_amount: { type: Number, required: true },
    apu_rud: { type: Number, required: true }
});
const ApusSchema = new mongoose_1.Schema({
    apu_name: { type: String, required: true },
    apu_id: { type: String, required: true },
    apu_unit: { type: String, required: true },
    apu_price: { type: Number, required: true },
    apu_materials: { type: [ApuGeneralMaterials], required: true },
    apu_equipment: { type: [ApuGeneralEquipment], required: true },
    apu_workHand: { type: [ApuGeneralWorkHand], required: true },
    apu_transportation: { type: [ApuGeneralTransportation], required: true },
    apu_description: { type: String, required: true },
    apu_chapter: { type: String, required: true },
    apu_apu: { type: [ApuGeneralApu], required: true },
});
exports.default = mongoose_1.default.model("Apus", ApusSchema);
