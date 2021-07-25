import { Request, Response } from 'express'
import moment from 'moment'
import insertTask from './insertTask'

export default async function createTask(req: Request, res: Response) {
    try {
        if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creator_id) {
            res.status(400).send({ message: "Title, description, limit date and/or author ID are missing" })
        }

        const dateDiff: number = moment(req.body.limit_date, 'DD/MM/YYYY').unix() - moment().unix()
        const id: string = Date.now() + Math.random().toString()

        if (dateDiff <= 0) {
            res.status(400).send({ message: 'The deadline must be a future date.' })
        }

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limit_date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.creator_id
        );
        
            res.status(200).send({message: "Task created!", id})
    } catch (error) {
        res.status(400).send(error.message)
    }
}