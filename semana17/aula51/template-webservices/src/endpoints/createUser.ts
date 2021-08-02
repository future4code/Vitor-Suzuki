import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, cep, logradouro, número, complemento, bairro, cidade, estado } = req.body

      if (!name || !nickname || !email || !cep || !logradouro || !número || !complemento || !bairro || !cidade || !estado) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'cep', 'logradouro', 'número', 'bairro', 'cidade' e 'estado' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, cep, logradouro, número, complemento, bairro, cidade, estado }

      await connection('userAddress').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}