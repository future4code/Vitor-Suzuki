import { Request, Response } from 'express'
import { connection } from '../connection'

export default async function getStudentById(req: Request, res: Response) {
    try {
        const id = req.params.id

        const result = await connection.raw(`
            SELECT ROUND(DATEDIFF("2021-01-01", birth_date)/365)
            FROM students
            WHERE id = '${id}'
        `)

        res.status(200).send(result[0][0])
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}