"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkTypes_1 = require("./checkTypes");
function checkworkHand(workHandInfo) {
    console.log(workHandInfo);
    const workHand_name = (0, checkTypes_1.valueParser)("string", "Nombre invalido", workHandInfo.workHand_name);
    const workHand_unit = (0, checkTypes_1.valueParser)("string", "Unidad invalida", workHandInfo.workHand_unit);
    const workHand_unitary_price = (0, checkTypes_1.valueParser)("number", "Precio invalido", workHandInfo.workHand_unitary_price);
    const workHand_rud = (0, checkTypes_1.valueParser)("number", "RUD invalido", workHandInfo.workHand_rud);
    const workHand_provider = (0, checkTypes_1.valueParser)("string", "Proveedor invalido", workHandInfo.workHand_provider);
    const workHand_category = (0, checkTypes_1.valueParser)("string", "Categoria invalida", workHandInfo.workHand_category);
    const workHand_code = (0, checkTypes_1.valueParser)("string", "Codigo invalido", workHandInfo.workHand_code);
    return {
        workHand_name,
        workHand_unit,
        workHand_unitary_price,
        workHand_rud,
        workHand_provider,
        workHand_category,
        workHand_code
    };
}
exports.default = checkworkHand;
