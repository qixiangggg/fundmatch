import express from "express"
import type { Express, Request, Response } from "express"
import { prisma } from "./lib/prisma.js"
const PORT = 8000
const app: Express = express()

app.use(express.json())

app.get('/', (req: Request,res: Response):void => {
    res.json({})
})

app.post("/documents", async (req: Request, res: Response) => {
    const {fileName, userId} = req.body
    try{
        const newDocument = await prisma.document.create({
            data:{
                fileName,
                userId
            }
        });
        res.status(201).json(newDocument);
    } catch(error){
        console.error("Prisma Error:", error)
        res.status(500).json({message:"Something went wrong"})
    }
    
})
app.listen(PORT, ():void => {
    console.log("Listening on port: ", PORT)
})