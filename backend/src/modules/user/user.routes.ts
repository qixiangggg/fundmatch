import express from "express"
import type { Router } from "express"
import { createUser, getUsers, getUserById, updateUserById, deleteUserById } from "./user.controller.js"
export const userRouter: Router = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/:id', getUserById)
userRouter.put('/:id', updateUserById)
userRouter.delete('/:id', deleteUserById)