import connection from "../connection";

export default async function returnUserById(id: string) {
    const result = await connection
    .select('*')
    .from('User')
    .where({ id });

    return result[0]
}   