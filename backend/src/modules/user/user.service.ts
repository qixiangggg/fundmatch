import { prisma } from "../../lib/prisma.js";
import type {  User } from "./user.types.js";

export async function createUser(data: Omit<User,"id">): Promise<User>{
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

export async function updateUserById(data: Partial<User>): Promise<User | null>{
    return prisma.user.update({
        where:{
            id:data.id,
        },data:{
            email: data.email,
            password: data.password
        }
    })
}

export async function deleteUserById(id: number): Promise<User | null>{
    return prisma.user.delete({
        where:{
            id:id
        }
    })
}