import { prisma } from "../../lib/prisma.js";
import type { CreateDocumentInput } from "./document.type.js";
export async function createDocument(data: CreateDocumentInput){
    return prisma.document.create({data})
}