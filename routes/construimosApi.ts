import express from "express";
import { getAllApus, getApuById, getApusByString, getMinifiedApuByString, getApuEquipment, getApuWorkHand, getApuMaterials, addNewApu } from "../controllers/apu.controller"

import { getMaterialById, getMaterialByString } from "../controllers/materials.controller"
import { getEquipmentByString } from "../controllers/equipment.controller"
import { getWorkHandByString } from "../controllers/workHand.controller"
const router = express.Router()

/**Apus */
router.get("/apus", getAllApus)
router.get("/apus/:id", getApuById)
router.get("/apus/search/:queryString", getApusByString)
router.get("/apus/search/minified/:queryString", getMinifiedApuByString)
router.get("/apus/:apuId/materials", getApuMaterials)
router.get("/apus/:apuId/equipment", getApuEquipment)
router.get("/apus/:apuId/workHand", getApuWorkHand)

/**Save new apus*/
router.post("/apus", addNewApu)

/**Materials */
router.get("/material/:id", getMaterialById)
router.get("/materials/search/:queryString", getMaterialByString)

/**Equipment */
router.get("/equipment/search/:queryString", getEquipmentByString)
/**Work Hand*/
router.get("/workHand/search/:queryString", getWorkHandByString)


export default router