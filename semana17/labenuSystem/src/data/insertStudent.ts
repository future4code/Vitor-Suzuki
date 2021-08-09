import { connection } from "../connection";

export default async function inserUser (id: string, name: string, email: string, birth_date: string, hobbies: string) {
    await connection.insert({
        id, 
        name, 
        email, 
        birth_date, 
        hobbies
    }).into('students')
}