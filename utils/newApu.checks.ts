import { APU } from "../types";

const isString = (string: string): boolean => {
    return typeof string === "string";
}

const isNumber = (number: number) => {
    return typeof number === "number"
}

const parseApuName = (apuName: any): string => {
    if (!isString(apuName)) {
        throw new Error("El nombre ingresado no es correcto")
    }
    return apuName
}

const parseApuUnit = (apuUnit: any): number => {
    if (!isString(apuUnit)) {
        throw new Error("La unidad ingresada no es correcta")
    }
    return apuUnit
}

const parseApuPrice = (apuPrice: any): number => {
    if (!isNumber(apuPrice)) {
        throw new Error("El precio ingresado no es correcto")
    }
    return apuPrice
}

const parseApuChapter = (apuChapter: any): number => {
    if (!isString(apuChapter)) {
        throw new Error("El capitulos ingresado no es correcto")
    }
    return apuChapter
}

const parseApuDescription = (apuDescription: any): string => {
    if (!isString(apuDescription)) {
        throw new Error("La descripción no es correcta")
    }
    return apuDescription
}


export default function checkApuData(apuInfo: APU) {
    const apu_name = parseApuName(apuInfo.apu_name)
    const apu_unit = parseApuUnit(apuInfo.apu_unit)
    const apu_price = parseApuPrice(apuInfo.apu_price)
    const apu_chapter = parseApuChapter(apuInfo.apu_chapter)
    const apu_description = parseApuDescription(apuInfo.apu_description)
    const apu_materials = apuInfo.apu_materials;
    const apu_equipment = apuInfo.apu_equipment;
    const apu_transportation = apuInfo.apu_transportation;
    const apu_apu = apuInfo.apu_apu;
    const apu_workHand = apuInfo.apu_workHand;
    const apuStructure = {
        apu_name,
        apu_unit,
        apu_chapter,
        apu_description,
        apu_materials,
        apu_equipment,
        apu_apu,
        apu_workHand,
        apu_transportation,
        apu_price
    }

    return apuStructure
}