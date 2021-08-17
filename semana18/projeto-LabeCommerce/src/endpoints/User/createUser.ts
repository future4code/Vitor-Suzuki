import { Request, Response } from "express";
import insertUser from "../../data/Users/insertUser";

export default async function createUser(req: Request, res: Response) {
    try {
        if(!req.body.name || !req.body.email || !req.body.age) {
            res.status(400).send('Todos os campos devem ser preenchidos')
        }

        const id: string = Date.now() + Math.random().toString()

        await insertUser(id, req.body.name, req.body.email, req.body.age)

        res.status(200).send('Usuário criado com sucesso')
    } catch (error) {
        res.status(400).send(error.message)
    }
}