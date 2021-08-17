import {Request, Response} from 'express';
import { connection } from '../../data/connection';
import { Product } from '../../entities/Product';

export default async function getAllProducts(
    req: Request,
    res: Response
){
    try {
        const resultDb: Product[] = await connection.select('*').from('products');
        const result = resultDb.map(product => new Product(product.name, product.description, product.price, product.id))

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}