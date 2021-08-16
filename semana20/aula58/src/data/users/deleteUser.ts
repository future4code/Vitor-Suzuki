import { connection } from "../connection"

export const deleteUser = async (id: string) => {
    try {
        await connection()
            .delete()
            .where({ id })
            .from('User_Arq')
    } catch (error) {
        throw new Error(error.message)
    }
}