import { Request, Response } from "express";
import { chekNewUser, checkCredentials } from "../utils/users.checks";
import jwt from "jsonwebtoken";
import users from "../models/users";

const createNewUser = async (req: Request, res: Response) => {
    try {
        const userInfo = chekNewUser(req.body.userData)
        const registerUser = new users(userInfo);
        await registerUser.save()
        res.json(registerUser)
    } catch (err) {
        res.status(400).json({ response: `${err}` })
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

