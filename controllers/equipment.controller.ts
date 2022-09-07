import { Request, Response } from "express";
import equipment from "../models/equipment";

const getEquipmentByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const equipmentList = await equipment.find({ equipment_name: { $regex: regexString } })
        if (equipmentList) {
            res.json(equipmentList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

export { getEquipmentByString }