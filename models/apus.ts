import Mongoose, { Schema } from "mongoose";
import { ApuGeneralMaterials, APU, ApuGeneralEquipment, ApuGeneralWorkHand, ApuGeneralTransportation } from "../types";


const ApuGeneralMaterials = new Schema<ApuGeneralMaterials>({
    material_id: { type: String, required: true },
    material_amount: { type: Number, required: true }
})

const ApuGeneralEquipment = new Schema<ApuGeneralEquipment>({
    equipment_id: { type: String, required: true },
    equipment_amount: { type: Number, required: true }
})

const ApuGeneralWorkHand = new Schema<ApuGeneralWorkHand>({
    workHand_id: { type: String, required: true },
    workHand_amount: { type: Number, required: true }
})

const ApuGeneralTransportation = new Schema<ApuGeneralTransportation>({
    transportation_id: { type: String, required: true },
    transportation_amount: { type: Number, required: true }
})

const ApusSchema = new Schema<APU>({
    apu_name: { type: String, required: true },
    apu_id: { type: String, required: true },
    apu_unit: { type: String, required: true },
    apu_price: { type: Number, required: true },
    apu_materials: { type: [ApuGeneralMaterials], required: true },
    apu_equipment: { type: [ApuGeneralEquipment], required: true },
    apu_workHand: { type: [ApuGeneralWorkHand], required: true },
    apu_transportation: { type: [ApuGeneralTransportation], required: true },
    apu_description: { type: String, required: true },
    apu_chapter: { type: String, required: true }
})

export default Mongoose.model<APU>("Apus", ApusSchema)