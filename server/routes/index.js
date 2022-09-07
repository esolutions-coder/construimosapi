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
const apus_1 = __importDefault(require("../models/apus"));
const rellenos_json_1 = __importDefault(require("../utils/apus/rellenos.json"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < rellenos_json_1.default.length; i++) {
        const currentApu = rellenos_json_1.default[i];
        const newApu = new apus_1.default(Object.assign({}, currentApu));
        yield newApu.save();
    }
    res.json({ response: "Completado" });
}));
exports.default = router;
