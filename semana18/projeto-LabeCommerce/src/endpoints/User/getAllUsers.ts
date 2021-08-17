import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { User } from "../../entities/User";

export default async function getAllUsers(
    req: Request,
    res: Response
) {
    try {
        const resultDb: User[] = await connection.select('*').from('users');

        const result = resultDb.map(user => new User(user.name, user.email, user.age, user.id))

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}