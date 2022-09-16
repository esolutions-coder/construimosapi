"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkTypes_1 = require("./checkTypes");
function checkTransportation(transportationInfo) {
    const transportation_name = (0, checkTypes_1.valueParser)("string", "Nombre invalido", transportationInfo.transportation_name);
    const transportation_unit = (0, checkTypes_1.valueParser)("string", "Unidad invalida", transportationInfo.transportation_unit);
    const transportation_unitary_price = (0, checkTypes_1.valueParser)("number", "Precio invalido", transportationInfo.transportation_unitary_price);
    const transportation_rud = (0, checkTypes_1.valueParser)("number", "RUD invalido", transportationInfo.transportation_rud);
    const transportation_provider = (0, checkTypes_1.valueParser)("string", "Proveedor invalido", transportationInfo.transportation_provider);
    const transportation_category = (0, checkTypes_1.valueParser)("string", "Categoria invalida", transportationInfo.transportation_category);
    const transportation_code = (0, checkTypes_1.valueParser)("string", "Codigo invalido", transportationInfo.transportation_code);
    return {
        transportation_name,
        transportation_unit,
        transportation_unitary_price,
        transportation_rud,
        transportation_provider,
        transportation_category,
        transportation_code
    };
}
exports.default = checkTransportation;
