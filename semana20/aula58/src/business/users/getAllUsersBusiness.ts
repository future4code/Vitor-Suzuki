import { getAllUsers } from "../../data/users/getAllUsers"
import { getTokenData } from "../../services/authenticator"

export const getAllUsersBusiness = async (token: string) => {
    getTokenData(token)
    
    return await getAllUsers()
}