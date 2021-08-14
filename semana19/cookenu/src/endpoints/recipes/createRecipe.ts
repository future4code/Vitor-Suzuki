import { Request, Response } from 'express'
import { connection } from '../../migrations'
import { Authenticator } from '../../services/Authenticator'
import { GenerateId } from '../../services/GenerateId'

export async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { title, description } = req.body

        const auth = new Authenticator()
        const token = req.headers.authorization!
        const tokenData = auth.getTokenData(token!)

        if(!tokenData) {
            res.statusCode = 401
            throw new Error("Não autorizado1")
        }

        if(!title || !description) {
            res.statusCode = 422
            throw new Error("Título e descrição são necessários!")
        }

        const newId  = new GenerateId()
        const id = newId.generate()

        const createdAt = new Date()

        await connection('cookenu_recipes')
            .insert({
                id, title, description, createdAt, authorId: tokenData!.id
            })

        res.status(200).send('Receita criada com sucesso!')
        
    } catch (error) {
        res.status(400).send(error.message)
    }
 }