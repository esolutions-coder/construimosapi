import { Response, Request } from "express";

type CIDEINMaterials = {
    material_name: string,
    material_unitary_price: number,
    material_provider: string,
    material_code: string,
    material_amount: number,
    material_unit: string,
    material_rud: number,
    material_partial_value?: number
}

type CIDEINEquipment = {
    equipment_name: string,
    equipment_unitary_price: number,
    equipment_provider: string,
    equipment_code: string,
    equipment_unit: string,
    equipment_amount: number,
    equipment_rud: number,
    equipment_partial_value?: number
}

type CIDEINWorkhand = {
    workHand_name: string,
    workHand_unitary_price: number,
    workHand_provider: string,
    workHand_code: string,
    workHand_unit: string,
    workHand_amount: number,
    workHand_rud: number,
    workHand_partial_value?: number
}

type SubActivities = {
    subActivity_apu: APU,
    amount: number,
    subActivity_total: number
    subActivity_id: string
}

type ProjecActivities = {
    activity_id: string,
    activity_name: string,
    subActivities: SubActivities[]
    subtotal_activity: number
}

type BudgetPrices = {
    IVA: number,
    admin: number,
    unforeseen: number,
    direct_costs: number,
    total_cost: number,
    utility: number
}


interface APU {
    apu_name: string,
    apu_id: string,
    apu_unit: string,
    apu_price: number,
    apu_materials: ApuGeneralMaterials[],
    apu_equipment: ApuGeneralEquipment[],
    apu_workHand: ApuGeneralWorkHand[],
    apu_apu: ApuGeneralApu[]
    apu_description: string
    apu_chapter: string
}

type CIDEINProjectConfig = {
    IVA: number,
    ADMIN: number,
    UNFORESEEN: number,
    UTILITY: number
}

interface CIDEINProject {
    project_title: string
    project_description: string,
    materials: CIDEINMaterials[],
    equipment: CIDEINEquipment[],
    workHand: CIDEINWorkhand[],
    apus: APU[],
    project_activities: ProjecActivities[]
    budget_prices: BudgetPrices,
    project_config: CIDEINProjectConfig
}

type ApuGeneralMaterials = {
    material_id: string,
    material_amount: number
}

type ApuGeneralApu = {
    apu_id: string,
    apu_amount: number
}

type ApuGeneralEquipment = {
    equipment_id: string,
    equipment_amount: number
}

type ApuGeneralWorkHand = {
    workHand_id: string,
    workHand_amount: number
}

type ApuGeneralTransportation = {
    transportation_id: string,
    transportation_amount: number
}