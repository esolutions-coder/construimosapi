import { Request, Response } from "express";
import equipment from "../models/equipment";
import { CIDEINEquipment } from "../types";
import checkEquipment from "../utils/check.equipment";

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

const createMultipleEquipment = async (req: Request, res: Response) => {
    const multipleEquipmentInfo: CIDEINEquipment[] = req.body.equipmentsData;
    let savedEquipment = 0;
    let repeatedCode = 0
    try {
        for (let i = 0; i < multipleEquipmentInfo.length; i++) {
            const singleEquipmentInfo = multipleEquipmentInfo[i]
            const currentCode = singleEquipmentInfo.equipment_code;
            const existCode = await equipment.find({ material_code: currentCode })
            if (existCode.length === 0) {
                savedEquipment += 1
                const newEquipment = checkEquipment(singleEquipmentInfo)
                const registerEquipment = new equipment(newEquipment);
                registerEquipment.save()
            } else {
                repeatedCode += 1
            }
        }
        res.json({ response: `Se han almacenado ${savedEquipment} Equipos en la base de datos, se encontraron ${repeatedCode} Equipos con codigos repetidos` })
    } catch (err) {
        res.status(400).json({ response: `${err}` })
    }
}

const getEquipmentByCode = async (req: Request, res: Response) => {
    const equipment_code = req.params.code;
    try {
        const equipmentFinded = await equipment.findOne({ equipment_code })
        res.json(equipmentFinded)
    } catch (err) {
        res.json(`${err}`)
    }
}

const updateEquipment = async (req: Request, res: Response) => {
    const equipmentId = req.params.id;
    const equipmentFromClient = req.body;
    try {
        const equipmentInfo = checkEquipment(equipmentFromClient)
        const equipmentToUpdate = await equipment.findByIdAndUpdate(equipmentId, equipmentInfo, { useFindAndModify: true })
        res.json(equipmentToUpdate)
    } catch (err) {
        res.status(400).json(`${err}`)
    }
}

export { getEquipmentByString, createMultipleEquipment, getEquipmentByCode, updateEquipment }