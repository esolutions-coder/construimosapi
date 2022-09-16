import express from "express";
import equipment from "../models/equipment"
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const allEquipment = await equipment.find();
    if (allEquipment) {
      for (let i = 0; i < allEquipment.length; i++) {
        const currentEquipment = allEquipment[i]
        const currentId = currentEquipment._id;
        const parsedRud = parseFloat(currentEquipment.equipment_rud)
        const updateField = await equipment.findByIdAndUpdate(currentId, { equipment_rud: parsedRud }, { useFindAndModify: true })
      }
    }
    res.json({ response: "Bienvenido a CONSTRUIMOS API" })
  } catch (err) {
    res.json(`${err}`)
  }

});

export default router