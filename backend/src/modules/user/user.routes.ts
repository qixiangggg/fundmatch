import express from "express"
import type { Router } from "express"
import { createUser, getUsers } from "./user.controller.js"
export const userRouter: Router = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)