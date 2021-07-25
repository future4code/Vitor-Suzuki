import { connection } from "../../connection";

export default async function selectTaskById(id: string): Promise<any> {
    const result = await connection.raw(`
        SELECT ToDoListTasks.*, ToDoListUsers.nickname FROM ToDoListTasks
        JOIN ToDoListUsers
        ON creator_id = ToDoListUsers.id
        WHERE ToDoListTasks.id = '${id}';
    `)

    return result[0][0]
}