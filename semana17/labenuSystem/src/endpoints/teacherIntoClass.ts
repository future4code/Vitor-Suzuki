import { Request, Response } from 'express'
import teacherList from '../data/teacherList'

export default async function teacherIntoClass(req: Request, res: Response) {
    try {
        await teacherList(req.body.teacher_name)

        res.status(200).send('Professor inserido com sucesso')

    } catch(error) { 
        res.status(400).send(error.message)
    }
}