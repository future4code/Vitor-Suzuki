import { Request, Response } from 'express'
import studentList from '../data/studentList'

export default async function studentIntoClass(req: Request, res: Response) {
    try {
        await studentList(req.body.student_name)

        res.status(200).send('Estudante inserido com sucesso')

    } catch(error) { 
        res.status(400).send(error.message)
    }
}