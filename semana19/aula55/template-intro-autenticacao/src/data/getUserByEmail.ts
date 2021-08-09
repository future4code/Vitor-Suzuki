import connection from "../connection";

export async function getUserByEmail(email: string){
    
    const result = await connection.select('*').from('User').where({email})

    return result[0]
}