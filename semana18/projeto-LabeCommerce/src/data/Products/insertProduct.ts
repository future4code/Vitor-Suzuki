import { connection } from "../connection";
import { Product } from "../../entities/Product";

export default async function insertUser(
    id: string,
    name: string,
    description: string,
    price: number
){
    const product = new Product(name, description, price, id)
    await connection.insert(product).into('products')
}