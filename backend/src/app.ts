import express from "express"
import type { Express, Request, Response } from "express"
import cors from "cors"
import { userRouter } from "./modules/user/user.routes.js"

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRouter)

app.get('/health', (req: Request,res: Response):void => {
    res.json({"status": "ok"});
})

export default app;