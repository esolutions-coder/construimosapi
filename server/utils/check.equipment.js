"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkTypes_1 = require("./checkTypes");
function checkEquipment(equipmentInfo) {
    const equipment_name = (0, checkTypes_1.valueParser)("string", "Nombre invalido", equipmentInfo.equipment_name);
    const equipment_unit = (0, checkTypes_1.valueParser)("string", "Unidad invalida", equipmentInfo.equipment_unit);
    const equipment_unitary_price = (0, checkTypes_1.valueParser)("number", "Precio invalido", equipmentInfo.equipment_unitary_price);
    const equipment_rud = (0, checkTypes_1.valueParser)("number", "RUD invalido", equipmentInfo.equipment_rud);
    const equipment_provider = (0, checkTypes_1.valueParser)("string", "Proveedor invalido", equipmentInfo.equipment_provider);
    const equipment_category = (0, checkTypes_1.valueParser)("string", "Categoria invalida", equipmentInfo.equipment_category);
    const equipment_code = (0, checkTypes_1.valueParser)("string", "Codigo invalido", equipmentInfo.equipment_code);
    return {
        equipment_name,
        equipment_unit,
        equipment_unitary_price,
        equipment_rud,
        equipment_provider,
        equipment_category,
        equipment_code
    };
}
exports.default = checkEquipment;
