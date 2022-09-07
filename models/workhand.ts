import { CIDEINWorkhand } from "../types";
import Mongoose, { Schema } from "mongoose";

const WorkHandSchema = new Schema<CIDEINWorkhand>({
    workHand_name: { type: String, required: true },
    workHand_unitary_price: { type: Number, required: true },
    workHand_provider: { type: String, required: true },
    workHand_code: { type: String, required: true },
    workHand_unit: { type: String, required: true },
    workHand_rud: { type: Number, required: true },
})

export { WorkHandSchema }
export default Mongoose.model("workHand", WorkHandSchema)