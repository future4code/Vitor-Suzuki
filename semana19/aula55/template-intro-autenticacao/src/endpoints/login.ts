import connection from "../connection";
import { Request, Response } from 'express'
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/generateToken";

export default async function login(req: Request, res: Response) {
    try {

        const { email, password } = req.body

        if (!email || email.indexOf('@') === -1) {
            throw new Error('Email inválido!')
        }

        const user = await getUserByEmail(email)

        if(user.password !== password) {
            throw new Error('Senha inválida')
        }

        const token = generateToken({id: user.id})
        res.status(200).send(token)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}


