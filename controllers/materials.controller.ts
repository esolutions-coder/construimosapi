import { Request, Response } from "express";
import materials from "../models/materials";

const getMaterialById = async (req: Request, res: Response) => {
    const materialId = req.params.id;
    try {
        const material = await materials.findById(materialId)
        res.json(material)
    } catch (err) {
        res.json(`${err}`)
    }
}

const getMaterialByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const materialList = await materials.find({ material_name: { $regex: regexString } })
        if (materialList) {
            res.json(materialList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

export { getMaterialById, getMaterialByString }