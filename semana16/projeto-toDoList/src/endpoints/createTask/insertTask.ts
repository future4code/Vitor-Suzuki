import { connection } from "../../connection";

export default async function insertTask(id: string, title: string, description: string, limit_date: string, creator_id: string) {
    await connection('ToDoListTasks')
    .insert({
        id, title, description, limit_date, creator_id
    })
}