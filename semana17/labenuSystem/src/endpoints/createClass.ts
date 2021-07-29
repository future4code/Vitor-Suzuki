import { Request, Response } from 'express'
import insertClass from '../data/insertClass'

export default async function createClass(req: Request, res: Response) {
    try {
        if(!req.body.name || !req.body.start_date || !req.body.finish_date || !req.body.teachers_list || !req.body.students_list || !req.body.module) {
            res.status(400).send("Todos os campos devem ser preenchidos!")
        }

        const id: string = Date.now() + Math.random().toString()

        await insertClass(id, req.body.name, req.body.start_date, req.body.finish_date, req.body.teachers_list, req.body.students_list, req.body.module)

        res.status(200).send(`'Turma criada com sucesso', ${id}`)
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}