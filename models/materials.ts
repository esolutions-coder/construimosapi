import { CIDEINMaterials } from "../types";
import Mongoose, { Schema } from "mongoose";

const MaterialsSchema = new Schema<CIDEINMaterials>({
    material_name: { type: String, required: true },
    material_unitary_price: { type: Number, required: true },
    material_provider: { type: String, required: true },
    material_code: { type: String, required: true },
    material_unit: { type: String, required: true },
    material_rud: { type: Number, required: true },
    material_category: { type: String, required: true }
})

export { MaterialsSchema }
export default Mongoose.model("materials", MaterialsSchema)