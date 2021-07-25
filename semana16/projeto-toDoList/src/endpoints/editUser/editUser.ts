import { connection } from "../../connection";

export default async function editUser(id: string, name?: string, nickname?: string, email?: string) {
    if (name) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name = '${name}'
            WHERE id = '${id}'
        `)
    }

    if (nickname) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name = '${nickname}'
            WHERE id = '${id}'
        `)
    }

    if (email) {
        await connection.raw(`
            UPDATE ToDoListUsers
            SET name = '${email}'
            WHERE id = '${id}'
        `)
    }
}