
import { Request, Response } from 'express'
import { connection } from '../../migrations'

export default async function getRecipeById(req: Request, res: Response) {
    try {
        const [recipe] = await connection('cookenu_recipes')
            .where({ id: req.params.id })

        if(!recipe) {
            res.statusCode = 404
            throw new Error("Receita não encontrada")
        }

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.createdAt
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}