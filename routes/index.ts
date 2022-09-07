import express from "express";
import apus from "../models/apus";
import sevilla_apu from "../utils/apus/rellenos.json"
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  for (let i = 0; i < sevilla_apu.length; i++) {
    const currentApu = sevilla_apu[i]
    const newApu = new apus({ ...currentApu })
    await newApu.save()
  }
  res.json({ response: "Completado" })
});

export default router