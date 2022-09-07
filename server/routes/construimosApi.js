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
const router = express_1.default.Router();
/**Apus */
router.get("/apus", apu_controller_1.getAllApus);
router.get("/apus/:id", apu_controller_1.getApuById);
router.get("/apus/search/:queryString", apu_controller_1.getApusByString);
router.get("/apus/search/minified/:queryString", apu_controller_1.getMinifiedApuByString);
router.get("/apus/:apuId/materials", apu_controller_1.getApuMaterials);
router.get("/apus/:apuId/equipment", apu_controller_1.getApuEquipment);
router.get("/apus/:apuId/workHand", apu_controller_1.getApuWorkHand);
/**Save new apus*/
router.post("/apus", apu_controller_1.addNewApu);
/**Materials */
router.get("/material/:id", materials_controller_1.getMaterialById);
router.get("/materials/search/:queryString", materials_controller_1.getMaterialByString);
/**Equipment */
router.get("/equipment/search/:queryString", equipment_controller_1.getEquipmentByString);
/**Work Hand*/
router.get("/workHand/search/:queryString", workHand_controller_1.getWorkHandByString);
exports.default = router;
