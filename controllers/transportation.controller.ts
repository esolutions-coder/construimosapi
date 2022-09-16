import { Request, Response } from "express";
import transportation from "../models/transportation";
import { CIDEINTransportation } from "../types";
import checkTransportation from "../utils/check.transportation";

const getTransportationByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const transportationLIst = await transportation.find({ transportation_name: { $regex: regexString } })
        if (transportationLIst) {
            res.json(transportationLIst)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const createMultipleTransportation = async (req: Request, res: Response) => {
    const multipleTransportationInfo: CIDEINTransportation[] = req.body.transportationData;
    let savedTransportation = 0;
    let repeatedCode = 0
    try {
        for (let i = 0; i < multipleTransportationInfo.length; i++) {
            const singleTransportation = multipleTransportationInfo[i]
            const currentCode = singleTransportation.transportation_code;
            const existCode = await transportation.find({ transportation_code: currentCode })
            if (existCode.length === 0) {
                savedTransportation += 1
                const newTransportation = checkTransportation(singleTransportation)
                const registerTransportation = new transportation(newTransportation);
                registerTransportation.save()
            } else {
                repeatedCode += 1
            }
        }
        res.json({ response: `Se han almacenado ${savedTransportation} Items de mano de obra en la base de datos, se encontraron ${repeatedCode} Items de Mano de obra con codigos repetidos` })
    } catch (err) {
        res.status(400).json({ response: `${err}` })
    }
}

const getTransportationByCode = async (req: Request, res: Response) => {
    const transportation_code = req.params.code;
    try {
        const transportationFinded = await transportation.findOne({ transportation_code })
        res.json(transportationFinded)
    } catch (err) {
        res.json(`${err}`)
    }
}

const updateTransportation = async (req: Request, res: Response) => {
    const transportationId = req.params.id;
    const transportationFromClient = req.body;
    console.log(transportationFromClient, transportationId)
    try {
        const transportationInfo = checkTransportation(transportationFromClient)
        const transportationToUpdate = await transportation.findByIdAndUpdate(transportationId, transportationInfo, { useFindAndModify: false })
        res.json(transportationToUpdate)
    } catch (err) {
        res.status(400).json(`${err}`)
    }
}

export { getTransportationByString, createMultipleTransportation, getTransportationByCode, updateTransportation }