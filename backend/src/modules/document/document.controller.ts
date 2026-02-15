import type { Request,Response } from "express";
import type{ Document, CreateDocumentRequest, UpdateDocumentRequest } from "./document.type.js";
import * as service from "./document.service.js"

export async function createDocument(
    req: Request<{}, {}, CreateDocumentRequest>,
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

export async function getDocuments(req: Request, res: Response<Document[]>): Promise<void> {
    const documents: Document[] = await service.getDocuments()
    res.status(200).json(documents)
}

export async function getDocumentById(
    req: Request<{id:string}>, 
    res: Response<Document | {message: string}>
): Promise<void>{
    const {id} = req.params
    const document: Document|null = await service.getDocumentById(Number(id))
    if(document){
        res.json(document)
    }else{
        res.status(404).json({message: "No document with that id"})
    }
}

export async function updateDocumentById(
    req: Request<{id:string}, {}, UpdateDocumentRequest>,
    res: Response<Document | {message: string}>
): Promise<void>{
    const {id} = req.params
    const document: Document | null = await service.updateDocumentById( Number(id), req.body)
    if(document){
        res.json(document)
    }else{
        res.status(404).json({message: "No document with that id"})
    }
}

export async function deleteUserById(
    req: Request<{id: string}>,
    res: Response<Document| {message: string}>
): Promise<void>{
    const{id} = req.params
    const document: Document | null = await service.deleteDocumentById(Number(id))
    if(document){
        res.json(document)
    }else{
        res.status(404).json({"message": "No document with that id"})
    }
}