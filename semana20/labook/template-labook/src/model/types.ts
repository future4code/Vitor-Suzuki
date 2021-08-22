import { Post } from "./post/Post"

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
    id?: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at?: Date,
    authorId?: string
}

export type getPostInputDTO = {
    id: string
}

export function postModel(obj: any): Post {
    return obj &&  {
        id: obj.id,
        photo: obj.photo,
        description: obj.description,
        type: obj.type,
        createdAt: obj.created_at,
        authorId: obj.author_id,
}
