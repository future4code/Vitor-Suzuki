import { Request, Response } from 'express'
import { connection } from '../../migrations'
import { Authenticator } from '../../services/Authenticator'

export async function getProfileById(req: Request, res: Response) {
    try {
        const token: string = req.headers.authorization!

        const auth = new Authenticator()
        const tokenData = auth.getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            throw new Error("Não autorizado1")
        }

        const id: string = req.params.id

        const [user] = await connection('cookenu_users')
            .where({ id })

        if(!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({ id: user.id, name: user.name, email: user.email })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

