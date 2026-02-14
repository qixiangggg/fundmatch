import express from "express"
import type { Router } from "express"
import { upload } from "../../middlewares/upload.middleware.js"
import { createDocument } from "./document.controller.js"
export const documentRouter: Router = express.Router()

documentRouter.post("/", upload.single("file"), createDocument)