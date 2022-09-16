import { CIDEINTransportation } from "../types";
import Mongoose, { Schema } from "mongoose";

const TransportationSchema = new Schema<CIDEINTransportation>({
    transportation_name: { type: String, required: true },
    transportation_unitary_price: { type: Number, required: true },
    transportation_provider: { type: String, required: true },
    transportation_code: { type: String, required: true },
    transportation_unit: { type: String, required: true },
    transportation_rud: { type: Number, required: true },
    transportation_category: { type: String, required: true }
})

export { TransportationSchema }
export default Mongoose.model("transportation", TransportationSchema)