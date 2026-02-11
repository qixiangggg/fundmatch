import express from "express"
import type { Express, Request, Response } from "express"

const PORT = 8000
const app: Express = express()

app.get('/', (req: Request,res: Response):void => {
    res.json({})
})

app.listen(PORT, ():void => {
    console.log("Listening on port: ", PORT)
})