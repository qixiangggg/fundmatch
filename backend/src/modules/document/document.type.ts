export type Document = {
    id :number
    fileName: string
    uploadedByUserId: number
    uploadedAt: Date
    status: "UPLOADED" | "PROCESSING" | "DONE" | "FAILED"
    storageKey: string
    deletedAt : Date | null
}

export type CreateDocumentRequest = {
    fileName: string,
    uploadedByUserId: number
    storageKey: string
}

export type UpdateDocumentRequest = {
    fileName?: string,
    storageKey?: string
}