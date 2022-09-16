import { CIDEINWorkhand } from "../types";
import { valueParser } from "./checkTypes";

export default function checkworkHand(workHandInfo: CIDEINWorkhand) {
    console.log(workHandInfo)
    const workHand_name = valueParser("string", "Nombre invalido", workHandInfo.workHand_name)
    const workHand_unit = valueParser("string", "Unidad invalida", workHandInfo.workHand_unit)
    const workHand_unitary_price = valueParser("number", "Precio invalido", workHandInfo.workHand_unitary_price)
    const workHand_rud = valueParser("number", "RUD invalido", workHandInfo.workHand_rud)
    const workHand_provider = valueParser("string", "Proveedor invalido", workHandInfo.workHand_provider)
    const workHand_category = valueParser("string", "Categoria invalida", workHandInfo.workHand_category)
    const workHand_code = valueParser("string", "Codigo invalido", workHandInfo.workHand_code)

    return {
        workHand_name,
        workHand_unit,
        workHand_unitary_price,
        workHand_rud,
        workHand_provider,
        workHand_category,
        workHand_code
    }
}