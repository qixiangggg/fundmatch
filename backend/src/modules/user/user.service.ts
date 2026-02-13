import { prisma } from "../../lib/prisma.js";
import type { CreateUserInput, User } from "./user.types.js";
export async function createUser(data: CreateUserInput): Promise<User>{
    return prisma.user.create({data});
}

export async function getUsers(): Promise<User[]>{
    return prisma.user.findMany()
}

export async function getUserById(id: number): Promise<User | null>{
    return prisma.user.findUnique({
        where:{
            id:id
        }
    })
}