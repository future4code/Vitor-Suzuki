import { connection } from "../connection";


export default async function studentList(teacher_name: string) {
    await connection.raw(`
        INSERT INTO classes (teachers_list)
        VALUES ('${teacher_name}');
    `)
}