import express from "express"
import type { Router } from "express"
import { upload } from "../../middlewares/upload.middleware.js"
import { createDocument, getDocuments, getDocumentById, updateDocumentById, deleteUserById } from "./document.controller.js"
export const documentRouter: Router = express.Router()

documentRouter.post("/", upload.single("file"), createDocument)
documentRouter.get("/", getDocuments)
documentRouter.get("/:id", getDocumentById)
documentRouter.put("/:id", updateDocumentById)
documentRouter.delete("/:id",deleteUserById)