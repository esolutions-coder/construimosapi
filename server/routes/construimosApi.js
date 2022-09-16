"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apu_controller_1 = require("../controllers/apu.controller");
const materials_controller_1 = require("../controllers/materials.controller");
const equipment_controller_1 = require("../controllers/equipment.controller");
const workHand_controller_1 = require("../controllers/workHand.controller");
const users_controller_1 = require("../controllers/users.controller");
const transportation_controller_1 = require("../controllers/transportation.controller");
const router = express_1.default.Router();
/**Apus */
router.get("/apus", apu_controller_1.getAllApus);
router.get("/apus/:id", apu_controller_1.getApuById);
router.get("/apuByCode/:code", apu_controller_1.getApuByCode);
router.get("/apus/search/:queryString", apu_controller_1.getApusByString);
router.get("/apus/:apuId/materials", apu_controller_1.getApuMaterials);
router.get("/apus/:apuId/transportation", apu_controller_1.getApuTransportation);
router.get("/apus/:apuId/equipment", apu_controller_1.getApuEquipment);
router.get("/apus/:apuId/workHand", apu_controller_1.getApuWorkHand);
router.get("/apus/:apuId/apus", apu_controller_1.getApuApu);
/**Save new apus*/
router.post("/apus", apu_controller_1.addNewApu);
/**Materials */
router.get("/materials", materials_controller_1.getAllMaterials);
router.get("/material/:id", materials_controller_1.getMaterialById);
router.get("/materialByCode/:code", materials_controller_1.getMaterialByCode);
router.get("/materials/search/:queryString", materials_controller_1.getMaterialByString);
router.post("/material", materials_controller_1.createMultipleMaterial);
router.put("/material/:id", materials_controller_1.updateMaterial);
/**Equipment */
router.get("/equipment/search/:queryString", equipment_controller_1.getEquipmentByString);
router.post("/equipment", equipment_controller_1.createMultipleEquipment);
router.get("/equipmentByCode/:code", equipment_controller_1.getEquipmentByCode);
router.put("/equipment/:id", equipment_controller_1.updateEquipment);
/**Work Hand*/
router.get("/workHand/search/:queryString", workHand_controller_1.getWorkHandByString);
router.post("/workhand", workHand_controller_1.createMultipleWorkhand);
router.get("/workhandByCode/:code", workHand_controller_1.getWorkhandByCode);
router.put("/workhand/:id", workHand_controller_1.updateWorkhand);
/** Transportation */
router.get("/transportation/search/:queryString", transportation_controller_1.getTransportationByString);
router.post("/transportation", transportation_controller_1.createMultipleTransportation);
router.get("/transportationByCode/:code", transportation_controller_1.getTransportationByCode);
router.put("/transportation/:id", transportation_controller_1.updateTransportation);
/**Users */
router.post("/createCideinUser", users_controller_1.createNewUser);
router.post("/loginCideinUser", users_controller_1.loginUser);
exports.default = router;
