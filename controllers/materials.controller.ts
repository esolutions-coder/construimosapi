import { Request, Response } from "express";
import materials from "../models/materials";
import { CIDEINMaterials } from "../types";
import checkMaterial from "../utils/check.materials";

const getMaterialById = async (req: Request, res: Response) => {
    const materialId = req.params.id;
    try {
        const material = await materials.findById(materialId)
        res.json(material)
    } catch (err) {
        res.json(`${err}`)
    }
}

const getMaterialByCode = async (req: Request, res: Response) => {
    const material_code = req.params.code;
    try {
        const material = await materials.findOne({ material_code })
        res.json(material)
    } catch (err) {
        res.json(`${err}`)
    }
}

const getMaterialByString = async (req: Request, res: Response) => {
    const queryString = req.params.queryString;
    const regexString = new RegExp(`${queryString}`, "i")
    try {
        const materialList = await materials.find({ material_name: { $regex: regexString } })
        if (materialList) {
            res.json(materialList)
        } else {
            res.json({ response: "No se han podido encontrar" })
        }
    } catch (err) {
        res.json({ response: `${err}` })
    }
}

const getAllMaterials = async (req: Request, res: Response) => {
    try {
        const fullMaterialList = await materials.find();
        res.json(fullMaterialList)
    } catch {
        res.status(400).json({ response: "No se pudo encontrar" })
    }
}

const createMultipleMaterial = async (req: Request, res: Response) => {
    const multipleMaterialInfo: CIDEINMaterials[] = req.body.materialsData;
    let savedMaterials = 0;
    let repeatedCode = 0
    try {
        for (let i = 0; i < multipleMaterialInfo.length; i++) {
            const singleMaterialInfo = multipleMaterialInfo[i]
            const currentCode = singleMaterialInfo.material_code;
            const existCode = await materials.find({ material_code: currentCode })
            if (existCode.length === 0) {
                savedMaterials += 1
                const newMaterial = checkMaterial(singleMaterialInfo)
                const registerMaterial = new materials(newMaterial);
                registerMaterial.save()
            } else {
                repeatedCode += 1
            }
        }
        res.json({ response: `Se han almacenado ${savedMaterials} materiales en la base de datos, se encontraron ${repeatedCode} materiales con codigos repetidos` })
    } catch (err) {
        res.status(400).json({ response: `${err}` })
    }
}

const updateMaterial = async (req: Request, res: Response) => {
    const materialId = req.params.id;
    const materialFromClient = req.body;
    try {
        const materialInfo = checkMaterial(materialFromClient)
        const materialToUpdate = await materials.findByIdAndUpdate(materialId, materialInfo, { useFindAndModify: true })
        res.json(materialToUpdate)
    } catch (err) {
        res.status(400).json(`${err}`)
    }
}

export { getMaterialById, getMaterialByString, getAllMaterials, createMultipleMaterial, getMaterialByCode, updateMaterial }