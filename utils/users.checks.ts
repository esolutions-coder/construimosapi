import { CIDEINUSers } from "../types";
import { isString } from "./checkTypes";
import bcrypt from "bcrypt";
import { UserRoles } from "../enums";

type LoginCredentials = {
    username: string,
    password: string
}

const parseUsername = (userNameFromForm: any) => {
    if (!isString(userNameFromForm)) {
        throw new Error("Nombre de usuario incorrecto")
    }
    return userNameFromForm
}

const parsePassword = (passwordFromForm: any) => {
    if (!isString(passwordFromForm)) {
        throw new Error("Contraseña incorrecta")
    }
    //hash password and return it
    const hash = bcrypt.hashSync(passwordFromForm, 10);
    return hash
}

const isAllowedRole = (roleFromForm: any) => {
    return Object.values(UserRoles).includes(roleFromForm);
}

const parseRole = (roleFromForm: any) => {
    if (!isAllowedRole(roleFromForm)) {
        throw new Error("Categoría inválida")
    }
    return roleFromForm
}

const isEmail = (emailFromForm: any) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const isemail = emailRegex.test(emailFromForm)
    return isemail;
}

const parseEmail = (emailFromForm: any) => {
    if (!isEmail(emailFromForm)) {
        throw new Error("Email inválido")
    }
    return emailFromForm
}

const parseLoginPassword = (passwordFromForm: any) => {
    if (!isString(passwordFromForm)) {
        throw new Error("Contraseña incorrecta")
    }
    return passwordFromForm
}

export function chekNewUser(userInfo: CIDEINUSers) {
    const username = parseUsername(userInfo.username)
    const password = parsePassword(userInfo.password)
    const role = parseRole(userInfo.role)
    const email = parseEmail(userInfo.email)
    const creationDate = Date()
    return {
        username,
        password,
        role,
        email,
        creationDate
    }
}


export async function checkCredentials(userInfo: LoginCredentials) {
    const myUsername = "miguel";
    const myPassword = "$2b$10$Cp1pYo916BAXN5cRuwt3Qed9eZcsP4Y8YHZw1VhscZXKcgt9B3ggO";

    const username = parseUsername(userInfo.username);
    const password = parseLoginPassword(userInfo.password)

    const match = await bcrypt.compare(password, myPassword)

    return match
}