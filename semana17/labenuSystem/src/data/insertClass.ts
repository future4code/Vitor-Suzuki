import { connection } from "../connection";

export default async function insertClass(
    id: string, 
    name: string, 
    start_date: string, 
    finish_date: string, 
    teachers_list: string,
    students_list: string, 
    module: string) {
        await connection.insert({
            id,
            name,
            start_date,
            finish_date,
            teachers_list,
            students_list,
            module
        }).into('classes')
}