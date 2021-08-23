import { compare } from "bcryptjs"
import { selectUserByEmail } from "../../data/users/login"
import { generateToken } from "../../services/authenticator"
import { user } from "../../types/user";


export const loginBusiness = async ({email, password}: any) => {
    const user: user | null = await selectUserByEmail(email)

    if (!user) {
        throw new Error("Usuário não encontrado ou senha incorreta")
    }

    const correctPassword: boolean = await compare(password, user.password)

    if (!correctPassword) {
        throw new Error("Usuário não encontrado ou senha incorreta")
    }

    
    const token: string = generateToken({id: user.id, role: user.role})

    return token
}