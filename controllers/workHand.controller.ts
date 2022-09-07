import { Request, Response } from "express";
import workhand from "../models/workhand";

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

export { getWorkHandByString }