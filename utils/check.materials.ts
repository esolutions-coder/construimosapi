import { CIDEINMaterials } from "../types";
import { isString, isNumber } from "./checkTypes";

const parseMaterialName = (materialName: any) => {
    if (!isString(materialName)) {
        throw new Error("Nombre incorrecto")
    }
    return materialName
}

const parseMaterialUnit = (materialUnit: any) => {
    if (!isString(materialUnit)) {
        throw new Error("Unidad incorrecta")
    }
    return materialUnit
}

const parseMaterialPrice = (materialPrice: any) => {
    if (!isNumber(materialPrice)) {
        throw new Error("Precio incorrecto")
    }
    return materialPrice
}

const parseMaterialRud = (materialRud: any) => {
    if (!isNumber(materialRud)) {
        throw new Error("RUD Incorrecto")
    }
    return materialRud
}

const parseMaterialProvider = (materialProvider: any) => {
    if (!isString(materialProvider)) {
        throw new Error("Proveedor incorrecto")
    }
    return materialProvider
}

const parseMaterialCategory = (materialCategory: any) => {
    if (!isString(materialCategory)) {
        throw new Error("Categoría incorrecta")
    }
    return materialCategory
}

const parseMaterialCode = (materialCode: any) => {
    if (!isString(materialCode)) {
        throw new Error("Error en el código")
    }
    return materialCode
}

export default function checkMaterial(materialInfo: CIDEINMaterials) {
    const material_name = parseMaterialName(materialInfo.material_name)
    const material_unit = parseMaterialUnit(materialInfo.material_unit)
    const material_unitary_price = parseMaterialPrice(materialInfo.material_unitary_price)
    const material_rud = parseMaterialRud(materialInfo.material_rud)
    const material_provider = parseMaterialProvider(materialInfo.material_provider)
    const material_category = parseMaterialCategory(materialInfo.material_category)
    const material_code = parseMaterialCode(materialInfo.material_code)

    return {
        material_name,
        material_unit,
        material_unitary_price,
        material_rud,
        material_provider,
        material_category,
        material_code
    }
}