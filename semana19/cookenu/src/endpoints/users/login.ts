import { Request, Response } from "express";
import { SignUpDataBase } from "../../data/signUpDataBase";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).send('Insira as informações de e-mail, nome e senha!')
        }

        const userDataBase = new SignUpDataBase();
        const user = await userDataBase.findUserByEmail(email);

        const hashManager = new HashManager()
        const passwordCompare = hashManager.compare(password, user.getPassword())

        if (!user || !passwordCompare) {
            res.status(401).send('Email ou senha incorretos!')
        }

        const auth = new Authenticator()
        const token = auth.generateToken({ id: user.getId() })

        res.status(200).send({ message: 'Login realizado!', token })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}