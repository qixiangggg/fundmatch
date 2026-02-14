import type { Request,Response } from "express";
import type{ Document } from "./document.type.js";
import * as service from "./document.service.js"
export async function createDocument(
    req: Request,
    res: Response<Document | {message: string}>
): Promise<void>{
    if (req.file){
        const documentCreated: Document = await service.createDocument({
            fileName: req.file.filename,
            uploadedByUserId:1 ,//hardcore here now, will add it once integrate auth
            storageKey: req.file.path
        })
        res.json(documentCreated)
    } else{
        res.status(400).json({message: "No file uploaded"})
    }
}