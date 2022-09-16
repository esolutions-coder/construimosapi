import { Request, Response } from "express";
import apus from "../models/apus";
import Apus from "../models/apus";
import equipment from "../models/equipment";
import materials from "../models/materials";
import transportation from "../models/transportation";
import workhand from "../models/workhand";
import checkApuData from "../utils/newApu.checks";

const getAllApus = async (req: Request, res: Response) => {
    try {
        const apusList = await Apus.find();
        if (apusList) {
            res.json(apusList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }

    } catch (err) {
        res.json({ response: `${err}` })
    }

}

const getApuById = async (req: Request, res: Response) => {
    const apuId = req.params.id
    try {
        const apusList = await Apus.findOne({ _id: apuId });
        if (apusList) {
            res.json(apusList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.status(400).json({ response: null })
    }
}

const getApusByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const apusList = await Apus.find({ apu_name: { $regex: regexString } })
        if (apusList) {
            res.json(apusList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getApuMaterials = async (req: Request, res: Response) => {
    const apuId: any = req.params.apuId;
    let materialNest: any = []
    try {
        const apuInfo = await Apus.findById(apuId)
        if (apuInfo) {
            const materialList = apuInfo.apu_materials;
            for (let i = 0; i < materialList.length; i++) {
                let materialId = materialList[i].material_id
                let materialInfo = await materials.findOne({ material_code: materialId })
                materialNest.push(materialInfo)
            }
            res.json(materialNest)
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getApuTransportation = async (req: Request, res: Response) => {
    const apuId: any = req.params.apuId;
    let transportationNest: any = []
    try {
        const apuInfo = await Apus.findById(apuId)
        if (apuInfo) {
            const transportationList = apuInfo.apu_transportation;
            for (let i = 0; i < transportationList.length; i++) {
                let transportationId = transportationList[i].transportation_id
                let transportationInfo = await transportation.findOne({ transportation_code: transportationId })
                transportationNest.push(transportationInfo)
            }
            res.json(transportationNest)
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getApuEquipment = async (req: Request, res: Response) => {
    const apuId: any = req.params.apuId;
    let equipmentNest: any = []
    try {
        const apuInfo = await Apus.findById(apuId)
        if (apuInfo) {
            const equipmentList = apuInfo.apu_equipment;
            for (let i = 0; i < equipmentList.length; i++) {
                let equipmentId = equipmentList[i].equipment_id
                let equiopmentInfo = await equipment.findOne({ equipment_code: equipmentId })
                equipmentNest.push(equiopmentInfo)
            }
            res.json(equipmentNest)
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getApuWorkHand = async (req: Request, res: Response) => {
    const apuId: any = req.params.apuId;
    let workHandNest: any = []
    try {
        const apuInfo = await Apus.findById(apuId)
        if (apuInfo) {
            const workHandList = apuInfo.apu_workHand;
            for (let i = 0; i < workHandList.length; i++) {
                let workHandId = workHandList[i].workHand_id
                let workHandInfo = await workhand.findOne({ workHand_code: workHandId })
                workHandNest.push(workHandInfo)
            }
            res.json(workHandNest)
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getApuApu = async (req: Request, res: Response) => {
    const apuId: any = req.params.apuId;
    let apusNest: any = []
    try {
        const apuInfo = await Apus.findById(apuId)
        if (apuInfo) {
            const subApuList = apuInfo.apu_apu;
            for (let i = 0; i < subApuList.length; i++) {
                let apudId = subApuList[i].apu_id
                let apusInfo = await apus.findOne({ apu_id: apudId })
                apusNest.push(apusInfo)
            }
            res.json(apusNest)
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

/**POST REQUESTS */
const addNewApu = async (req: Request, res: Response) => {
    const apuData = req.body.apuData

    try {
        const allApus = await apus.find();
        const lastApu = allApus.length;
        const myApu = checkApuData(apuData)
        const newApuCode = String(lastApu).padStart(5, '0')
        const createEntry = new apus({ ...myApu, apu_id: `APU${newApuCode}` })
        await createEntry.save()
        res.json(createEntry)
    } catch (err) {
        console.log(`${err}`)
        res.status(400).json({ response: `${err}` })
    }
}

const getApuByCode = async (req: Request, res: Response) => {
    const apu_id = req.params.code;
    try {
        const apuFinded = await apus.findOne({ apu_id })
        res.json(apuFinded)
    } catch (err) {
        res.json(`${err}`)
    }
}

export { getAllApus, getApuById, getApusByString, getApuMaterials, getApuEquipment, getApuWorkHand, addNewApu, getApuApu, getApuTransportation, getApuByCode }