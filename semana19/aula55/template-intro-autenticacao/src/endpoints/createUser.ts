import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import insertUser from '../data/insertUser';

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || email.indexOf('@') === -1) {
         res.statusCode = 422
         throw new Error("Email inválido!")
      }

      if (!password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Senha inválida!")
      }

      const id: string = generateId()

      await insertUser(id, email, password)

      const token = generateToken({ id })

      res.status(201).send({ token })
   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}


