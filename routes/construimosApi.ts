import express from "express";
import { getAllApus, getApuById, getApusByString, getApuEquipment, getApuWorkHand, getApuMaterials, addNewApu, getApuApu, getApuTransportation, getApuByCode } from "../controllers/apu.controller"

import { getMaterialById, getMaterialByString, getAllMaterials, createMultipleMaterial, getMaterialByCode, updateMaterial } from "../controllers/materials.controller"
import { getEquipmentByString, createMultipleEquipment, getEquipmentByCode, updateEquipment } from "../controllers/equipment.controller"
import { getWorkHandByString, createMultipleWorkhand, getWorkhandByCode, updateWorkhand } from "../controllers/workHand.controller"
import { createNewUser, loginUser } from "../controllers/users.controller";
import { createMultipleTransportation, getTransportationByString, getTransportationByCode, updateTransportation } from "../controllers/transportation.controller";

const router = express.Router()

/**Apus */
router.get("/apus", getAllApus)
router.get("/apus/:id", getApuById)
router.get("/apuByCode/:code", getApuByCode)
router.get("/apus/search/:queryString", getApusByString)
router.get("/apus/:apuId/materials", getApuMaterials)
router.get("/apus/:apuId/transportation", getApuTransportation)
router.get("/apus/:apuId/equipment", getApuEquipment)
router.get("/apus/:apuId/workHand", getApuWorkHand)
router.get("/apus/:apuId/apus", getApuApu)

/**Save new apus*/
router.post("/apus", addNewApu)

/**Materials */
router.get("/materials", getAllMaterials)
router.get("/material/:id", getMaterialById)
router.get("/materialByCode/:code", getMaterialByCode)
router.get("/materials/search/:queryString", getMaterialByString)
router.post("/material", createMultipleMaterial);
router.put("/material/:id", updateMaterial)

/**Equipment */
router.get("/equipment/search/:queryString", getEquipmentByString)
router.post("/equipment", createMultipleEquipment);
router.get("/equipmentByCode/:code", getEquipmentByCode)
router.put("/equipment/:id", updateEquipment)

/**Work Hand*/
router.get("/workHand/search/:queryString", getWorkHandByString)
router.post("/workhand", createMultipleWorkhand);
router.get("/workhandByCode/:code", getWorkhandByCode)
router.put("/workhand/:id", updateWorkhand)

/** Transportation */
router.get("/transportation/search/:queryString", getTransportationByString);
router.post("/transportation", createMultipleTransportation);
router.get("/transportationByCode/:code", getTransportationByCode);
router.put("/transportation/:id", updateTransportation);

/**Users */
router.post("/createCideinUser", createNewUser)
router.post("/loginCideinUser", loginUser)

export default router