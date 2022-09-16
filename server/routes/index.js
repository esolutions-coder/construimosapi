"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const equipment_1 = __importDefault(require("../models/equipment"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allEquipment = yield equipment_1.default.find();
        if (allEquipment) {
            for (let i = 0; i < allEquipment.length; i++) {
                const currentEquipment = allEquipment[i];
                const currentId = currentEquipment._id;
                const parsedRud = parseFloat(currentEquipment.equipment_rud);
                const updateField = yield equipment_1.default.findByIdAndUpdate(currentId, { equipment_rud: parsedRud }, { useFindAndModify: true });
            }
        }
        res.json({ response: "Bienvenido a CONSTRUIMOS API" });
    }
    catch (err) {
        res.json(`${err}`);
    }
}));
exports.default = router;
