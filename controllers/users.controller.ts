import { Request, Response } from "express";
import { chekNewUser, checkCredentials } from "../utils/users.checks";
import jwt from "jsonwebtoken";

const createNewUser = (req: Request, res: Response) => {
    try {
        const userInfo = chekNewUser(req.body)
        res.json(userInfo)
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const verify = await checkCredentials(req.body);
        if (verify) {
            const authenticatedUser = {
                username: "miguel",
                role: "admin"
            }
            const token = jwt.sign(authenticatedUser, "secret")
            const userWithToken = {
                username: authenticatedUser.username,
                role: authenticatedUser.role,
                token
            }
            res.json(userWithToken)
        }
        else {

        }

    } catch (err) {
        res.json({ response: `${err}` })
    }
}
export { createNewUser, loginUser }

