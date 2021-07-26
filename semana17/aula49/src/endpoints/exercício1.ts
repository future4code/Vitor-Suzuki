import { Request, Response } from 'express'
import { connection } from '../data/connection'


// a)
export const getAllUsers = async (req:Request, res: Response): Promise<void> => {
    try {

        const name = req.query.name || "%"

        const users = await connection("aula49_exercicio")
            .where("name", "LIKE", `%${name}%`)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// b)

export const getAllUsersPath = async (req:Request, res: Response): Promise<void> => {
    try {

        const type = req.query.type  
        const result = await connection("aula49-exercicio")
        .where("type", "LIKE", `${type}`)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}