"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkTypes_1 = require("./checkTypes");
const parseMaterialName = (materialName) => {
    if (!(0, checkTypes_1.isString)(materialName)) {
        throw new Error("Nombre incorrecto");
    }
    return materialName;
};
const parseMaterialUnit = (materialUnit) => {
    if (!(0, checkTypes_1.isString)(materialUnit)) {
        throw new Error("Unidad incorrecta");
    }
    return materialUnit;
};
const parseMaterialPrice = (materialPrice) => {
    if (!(0, checkTypes_1.isNumber)(materialPrice)) {
        throw new Error("Precio incorrecto");
    }
    return materialPrice;
};
const parseMaterialRud = (materialRud) => {
    if (!(0, checkTypes_1.isNumber)(materialRud)) {
        throw new Error("RUD Incorrecto");
    }
    return materialRud;
};
const parseMaterialProvider = (materialProvider) => {
    if (!(0, checkTypes_1.isString)(materialProvider)) {
        throw new Error("Proveedor incorrecto");
    }
    return materialProvider;
};
const parseMaterialCategory = (materialCategory) => {
    if (!(0, checkTypes_1.isString)(materialCategory)) {
        throw new Error("Categoría incorrecta");
    }
    return materialCategory;
};
const parseMaterialCode = (materialCode) => {
    if (!(0, checkTypes_1.isString)(materialCode)) {
        throw new Error("Error en el código");
    }
    return materialCode;
};
function checkMaterial(materialInfo) {
    const material_name = parseMaterialName(materialInfo.material_name);
    const material_unit = parseMaterialUnit(materialInfo.material_unit);
    const material_unitary_price = parseMaterialPrice(materialInfo.material_unitary_price);
    const material_rud = parseMaterialRud(materialInfo.material_rud);
    const material_provider = parseMaterialProvider(materialInfo.material_provider);
    const material_category = parseMaterialCategory(materialInfo.material_category);
    const material_code = parseMaterialCode(materialInfo.material_code);
    return {
        material_name,
        material_unit,
        material_unitary_price,
        material_rud,
        material_provider,
        material_category,
        material_code
    };
}
exports.default = checkMaterial;
