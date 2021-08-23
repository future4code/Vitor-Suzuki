import { deleteUser } from "../../data/users/deleteUser"
import { getTokenData } from "../../services/authenticator"

export const deleteUserBusiness = async (input: {id: string, token: string}) => {
    const token = getTokenData(input.token)

    if(token.role !== "ADMIN") {
        throw new Error("Somente administradores podem deletar usuários!")
    }

    return await deleteUser(input.id)

}