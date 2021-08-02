import { Request, Response } from 'express'
import { connection } from '../data/connection'

export const getAllUsersPage = async (req:Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name || "%"
        const sort = req.query.sort === "name" ? "name" : "type"
        const order = req.query.order === "DESC" ? "DESC" : "ASC"
        const page = Number(req.query.page) || 1
        const offset: number = 5 * (page - 1)

        const result = await connection("aula49_exercicio")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(sort, order)
            .limit(5)
            .offset(offset)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}