import { UserDataBase } from "../../data/user/UserDataBase"
import { UserInputDTO } from "../../model/types"
import { User } from "../../model/user/User"
import { GenerateId } from "../../services/GenerateId"
import { HashManager } from "../../services/HashManager"
import { TokenManager } from "../../services/TokenManager"

export class UserBusiness {
    async signUpBusiness(user: UserInputDTO): Promise<string> {
        if (
            !user.name ||
            !user.email ||
            !user.password
        ) {
            throw new Error("E-mail, senha ou nome inválidos!")
        }

        const generateId = new GenerateId()
        const id: string = generateId.generate()

        const hashManager = new HashManager()
        const hash = await hashManager.hash(user.password)

        const newUser = { id, ...user, password: hash }
        const userDatabase = new UserDataBase()
        await userDatabase.create(newUser)

        const tokenManager = new TokenManager()
        const token = tokenManager.genToken({ id })

        return token
    }

    async loginBusiness({ email, password }: any) {
        if (
            !email ||
            !password
        ) {
            throw new Error("E-mail ou senha inválidos!")
        }


        const userDatabase = new UserDataBase()
        const result = await userDatabase.selectByEmail({ email })

        if (!result) {
            throw new Error("Email ou senha inválidos")
        }

        const hashManager = new HashManager()

        const user = new User(result.id, result.name, result.email, result.password)
        const correctPass = await hashManager.compare(password, user.getPassword())

        if (!correctPass) {
            throw new Error("E-mail ou senha inválidos")
        }

        const tokenManager = new TokenManager()
        const token = tokenManager.genToken({ id: user.getId() })

        return token
    }
}