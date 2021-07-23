import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connection } from './connection'

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

app.post("/users", async (req: Request, res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO ToDoListUsers (id, name, nickname, email)
            VALUES (
                "${req.body.id} AUTO_INCREMENT",
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            )
        `)

        if (!req.body.name || !req.body.nickname|| !req.body.email) {
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

    res.status(200).send("User created!")
    } catch (error) {
    }

})
