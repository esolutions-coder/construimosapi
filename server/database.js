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
const mongoose_1 = __importDefault(require("mongoose"));
const user = encodeURIComponent("mercurio0");
const password = encodeURIComponent("jupiter04");
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb://${user}:${password}@ac-ozcw4q4-shard-00-00.fnzzqaz.mongodb.net:27017,ac-ozcw4q4-shard-00-01.fnzzqaz.mongodb.net:27017,ac-ozcw4q4-shard-00-02.fnzzqaz.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ge0l3-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Conectado a la base de datos");
        }
        catch (err) {
            console.log("Hubo un error: ");
            console.log(err);
        }
    });
}
exports.default = connectDatabase;
