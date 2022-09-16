import { CIDEINTransportation } from "../types";
import { valueParser } from "./checkTypes";

export default function checkTransportation(transportationInfo: CIDEINTransportation) {
    const transportation_name = valueParser("string", "Nombre invalido", transportationInfo.transportation_name)
    const transportation_unit = valueParser("string", "Unidad invalida", transportationInfo.transportation_unit)
    const transportation_unitary_price = valueParser("number", "Precio invalido", transportationInfo.transportation_unitary_price)
    const transportation_rud = valueParser("number", "RUD invalido", transportationInfo.transportation_rud)
    const transportation_provider = valueParser("string", "Proveedor invalido", transportationInfo.transportation_provider)
    const transportation_category = valueParser("string", "Categoria invalida", transportationInfo.transportation_category)
    const transportation_code = valueParser("string", "Codigo invalido", transportationInfo.transportation_code)

    return {
        transportation_name,
        transportation_unit,
        transportation_unitary_price,
        transportation_rud,
        transportation_provider,
        transportation_category,
        transportation_code
    }
}