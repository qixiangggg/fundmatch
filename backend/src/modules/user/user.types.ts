export type User = {
    id: number,
    email: string,
    password: string,
    createdAt: Date
}

export type CreateUserRequest = {
    email: string,
    password: string,
    createdAt?: Date
}

export type UpdateUserRequest = {
    email?: string,
    password?: string,
}