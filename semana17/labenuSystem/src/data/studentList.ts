import { connection } from "../connection";


export default async function studentList(student_name: string) {
    await connection.raw(`
        INSERT INTO classes (students_list)
        VALUES ('${student_name}');
    `)
}