import { Request, Response } from "express";
import workhand from "../models/workhand";
import { CIDEINWorkhand } from "../types";
import checkWorkhand from "../utils/check.workhand";

const getWorkHandByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const workHandList = await workhand.find({ workHand_name: { $regex: regexString } })
        if (workHandList) {
            res.json(workHandList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const createMultipleWorkhand = async (req: Request, res: Response) => {
    const multipleWorkhandInfo: CIDEINWorkhand[] = req.body.workhandData;
    let savedWorkhand = 0;
    let repeatedCode = 0
    try {
        for (let i = 0; i < multipleWorkhandInfo.length; i++) {
            const singleWorkhandInfo = multipleWorkhandInfo[i]
            const currentCode = singleWorkhandInfo.workHand_code;
            const existCode = await workhand.find({ workHand_code: currentCode })
            if (existCode.length === 0) {
                savedWorkhand += 1
                const newWorkhand = checkWorkhand(singleWorkhandInfo)
                const registerWorkhand = new workhand(newWorkhand);
                // registerWorkhand.save()
            } else {
                repeatedCode += 1
            }
        }
        res.json({ response: `Se han almacenado ${savedWorkhand} Items de mano de obra en la base de datos, se encontraron ${repeatedCode} Items de Mano de obra con codigos repetidos` })
    } catch (err) {
        res.status(400).json({ response: `${err}` })
    }
}

const getWorkhandByCode = async (req: Request, res: Response) => {
    const workHand_code = req.params.code;
    try {
        const workhandFinded = await workhand.findOne({ workHand_code })
        res.json(workhandFinded)
    } catch (err) {
        res.json(`${err}`)
    }
}

const updateWorkhand = async (req: Request, res: Response) => {
    const workhandId = req.params.id;
    const workhandFromClient = req.body;
    try {
        const workhandInfo = checkWorkhand(workhandFromClient)
        const workhandToUpdate = await workhand.findByIdAndUpdate(workhandId, workhandInfo, { useFindAndModify: true })
        res.json(workhandToUpdate)
    } catch (err) {
        res.status(400).json(`${err}`)
    }
}


export { getWorkHandByString, createMultipleWorkhand, getWorkhandByCode, updateWorkhand }