import { Request, Response } from "express";
import { SignUpDataBase } from "../../data/signUpDataBase";
import { User } from "../../entities/User";
import { connection } from "../../migrations";
import { Authenticator } from "../../services/Authenticator";
import { GenerateId } from "../../services/GenerateId";
import { HashManager } from "../../services/HashManager";

export async function signUp(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422).send('Insira as informações de e-mail, nome e senha!')
        }

        const user = await connection('cookenu_users')
            .where({ email })

        if(user) {
            res.status(409).send('E-mail já cadastrado!')
        }

        const newId = new GenerateId()
        const id = newId.generate()

        const hashManager = new HashManager()
        const cypherPass = hashManager.hash(password)

        const newUser = new User(id, name, email, await cypherPass)

        const signUpDataBase = new SignUpDataBase()
        await signUpDataBase.insertUser(newUser)

        const auth = new Authenticator()
        const token = auth.generateToken({ id })

        res.status(200).send({ message: 'Usuário criado com sucesso!', id, name, token })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}