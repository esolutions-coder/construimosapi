import { CIDEINEquipment } from "../types";
import { isString, isNumber, valueParser } from "./checkTypes";



export default function checkEquipment(equipmentInfo: CIDEINEquipment) {
    const equipment_name = valueParser("string", "Nombre invalido", equipmentInfo.equipment_name)
    const equipment_unit = valueParser("string", "Unidad invalida", equipmentInfo.equipment_unit)
    const equipment_unitary_price = valueParser("number", "Precio invalido", equipmentInfo.equipment_unitary_price)
    const equipment_rud = valueParser("number", "RUD invalido", equipmentInfo.equipment_rud)
    const equipment_provider = valueParser("string", "Proveedor invalido", equipmentInfo.equipment_provider)
    const equipment_category = valueParser("string", "Categoria invalida", equipmentInfo.equipment_category)
    const equipment_code = valueParser("string", "Codigo invalido", equipmentInfo.equipment_code)

    return {
        equipment_name,
        equipment_unit,
        equipment_unitary_price,
        equipment_rud,
        equipment_provider,
        equipment_category,
        equipment_code
    }
}