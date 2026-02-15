import type { Request, Response } from "express";
import type {  User, CreateUserRequest, UpdateUserRequest } from "./user.types.js";
import * as service from "./user.service.js"

export async function createUser(
    req: Request<{}, {}, CreateUserRequest>,
    res: Response<User>
): Promise<void> {
    const user: User = await service.createUser({
        email: req.body.email,
        password: req.body.password
    })
    res.status(201).json(user);
}

export async function getUsers(
    req: Request,
    res: Response<User[]>
): Promise<void>{
    const users: User[] = await service.getUsers()
    res.status(200).json(users);
}

export async function getUserById(
    req: Request<{id:string}>,
    res: Response< User|{message: string}>
): Promise<void>{
    const {id} = req.params
    const user: User|null = await service.getUserById(Number(id))
    if(user){
        res.json(user)
    } else{
        res.status(404).json({message: "No user with that id"})
    }
}

export async function updateUserById(
    req: Request<{id:string}, {}, UpdateUserRequest>,
    res: Response<User|{message:string}>
){
    const {id} = req.params
    const user: User | null = await service.updateUserById(Number(id), req.body)
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "No user with that id"})
    }

}

export async function deleteUserById(
    req: Request<{id: string}>,
    res: Response<User | {message: string}>
): Promise<void>{
    const {id} = req.params
    const user: User | null = await service.deleteUserById(Number(id))
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "No user with that id"})
    }
}