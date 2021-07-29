import { Request, Response } from 'express';
import insertStudent from '../data/insertStudent'

export default async function createStudent(req: Request, res: Response) {
    try {
        if (!req.body.name || !req.body.email || !req.body.birth_date || !req.body.hobbies) {
            res.status(400).send('Os campos devem ser preenchidos!')
        }

        const id: string = Date.now() + Math.random().toString()

        await insertStudent(id, req.body.name, req.body.email, req.body.birth_date, req.body.hobbies)

        res.status(200).send(`'Estudante criado com sucesso', ${id}`)
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}



