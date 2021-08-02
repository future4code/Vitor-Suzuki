import { Request, Response } from 'express';
import { connection } from '../../connection';

export default async function createUser(req: Request, res: Response):Promise <any> {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Missing data in body to create user")
        }

        if (typeof req.body.name !== "string") {
            throw new Error("Invalid name")
        }

        if (typeof req.body.nickname !== "string") {
            throw new Error("Invalid email")
        }

        if (typeof req.body.email !== "string") {
            throw new Error("Invalid birth")
        }

        const id: string = Date.now() + Math.random().toString()

        const result = await connection.raw(`
            INSERT INTO ToDoListUsers (id, name, nickname, email)
            VALUES (
                "${id}",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            )
        `);
        
        res.status(200).send("User created!")
        return result[0][0]

    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}