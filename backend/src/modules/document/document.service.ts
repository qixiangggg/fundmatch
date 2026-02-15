import { prisma } from "../../lib/prisma.js";
import type{ Document } from "../../generated/prisma/client.js";
import type { Prisma } from "../../generated/prisma/client.js";

export async function createDocument(data: Prisma.DocumentUncheckedCreateInput): Promise<Document>{
    return prisma.document.create({data})
}

export async function getDocuments(): Promise<Document[]>{
    return prisma.document.findMany()
}

export async function getDocumentById(id: number): Promise<Document | null>{
    return prisma.document.findUnique({
        where:{
            id: id
        }
    })
}

export async function updateDocumentById(id: number, data: Prisma.DocumentUpdateInput): Promise<Document | null>{
    return prisma.document.update({
        where:{
            id: id
        }, data:{
            fileName: data.fileName,
            storageKey: data.storageKey
        }
    })
}

export async function deleteDocumentById(id: number): Promise<Document|null>{
    return prisma.document.delete({
        where:{
            id: id
        }
    })
}