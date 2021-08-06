import { connection } from "../connection";
import { User } from "../../entities/User";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    age: number
){
    const user = new User(name, email, age, id)
    await connection.insert(user).into('users')
}