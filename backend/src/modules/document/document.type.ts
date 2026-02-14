export type CreateDocumentInput = {
    fileName: string
    uploadedByUserId: number
    storageKey: string
}

export type Document = {
    id :number
    fileName: string
    uploadedByUserId: number
    uploadedAt: Date
    status: "UPLOADED" | "PROCESSING" | "DONE" | "FAILED"
    storageKey: string
    deletedAt : Date | null
}