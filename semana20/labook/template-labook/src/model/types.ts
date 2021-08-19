export type authenticationData = {
    id: string
}

export type UserInputDTO = {
    id?: string,
    name: string,
    email: string,
    password: string
}

enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type PostInputDTO = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}
