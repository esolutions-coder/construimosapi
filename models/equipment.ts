import { CIDEINEquipment } from "../types";
import Mongoose, { Schema } from "mongoose";

const EquipmentSchema = new Schema<CIDEINEquipment>({
    equipment_name: { type: String, required: true },
    equipment_unitary_price: { type: Number, required: true },
    equipment_provider: { type: String, required: true },
    equipment_code: { type: String, required: true },
    equipment_unit: { type: String, required: true },
    equipment_rud: { type: Number, required: true },
    equipment_category: { type: String, required: true },
})

export { EquipmentSchema }
export default Mongoose.model("equipment", EquipmentSchema)