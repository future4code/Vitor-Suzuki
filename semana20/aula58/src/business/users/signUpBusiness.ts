import { hash } from "../../services/hashManager"
import { Request, Response } from "express"
import { insertUser } from "../../data/users/insertUser"
import { generateToken } from "../../services/authenticator"
import { generateId } from "../../services/idGenerator"

export const signUpBusiness = async ({name, email, password, role}: any) => {

        const id: string = generateId()

        const cypherPassword = await hash(password)

        await insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const token: string = generateToken({id, role: role})
        
        return token
}