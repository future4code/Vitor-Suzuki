import { Request, Response } from 'express'
import insertTeacher from '../data/insertTeacher'

export default async function createTeacher(req: Request, res: Response) {
    try {
        if (!req.body.name || !req.body.email || !req.body.birth_date || !req.body.specialties) {
            res.status(400).send("Os campos precisam ser preenchido!")
        }

        const id: string = Date.now() + Math.random().toString()

        await insertTeacher(id, req.body.name, req.body.email, req.body.birth_date, req.body.specialties)
        
        res.status(200).send(`'Docente criado com sucesso', ${id}`)
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}