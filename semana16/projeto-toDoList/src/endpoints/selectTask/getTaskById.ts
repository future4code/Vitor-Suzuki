import { Request, Response } from 'express'
import moment from 'moment'
import selectTaskById from './selectTaskById'

export default async function getTaskById(req: Request, res: Response) {
    try {
        const result = await selectTaskById(req.params.id)

        if (!result) {
            res.status(404).send({message: 'Task not found!'})
        }

        res.status(200).send({...result, limit_date: moment(result.limit_date, 'YYYY-MM-DD').format('DD-MM-YYYY')})
    } catch (error) {

    }
}