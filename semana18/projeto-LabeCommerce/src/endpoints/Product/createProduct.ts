import { Request, Response } from "express";
import insertProduct from "../../data/Products/insertProduct";
import {v4 as uuidv4} from 'uuid';

export default async function createProduct(req: Request, res: Response) {
    try {
        if(!req.body.name || !req.body.description || !req.body.price) {
            res.status(400).send('Todos os campos devem ser preenchidos')
        }

        let id = uuidv4()

        await insertProduct(id, req.body.name, req.body.description, req.body.price)

        res.status(200).send(`Produto criado com sucesso, id: ${id}, name: ${req.body.name}`)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

