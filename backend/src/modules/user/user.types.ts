export type CreateUserInput = {
    email: string
    password: string
}

export type UpdateUserInput = {
    id:number
    email: string
    password: string
}

export type User = {
    id: number,
    email: string,
    password: string,
    createdAt: Date
}