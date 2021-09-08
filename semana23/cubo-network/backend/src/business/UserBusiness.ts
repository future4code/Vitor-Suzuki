import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO } from "../model/user";
import { GenerateId } from "../services/GenerateId";

export class UserBusiness {
    async signup(user: UserInputDTO): Promise<any> {
        if (
            !user.name ||
            !user.last_name ||
            !user.participation
        ) {
            throw new Error("All fields are required!")
        }

        const generateId = new GenerateId()
        const id: string = generateId.generate()

        const newUser = {id, ...user}
        const userDatabase = new UserDatabase()

        await userDatabase.signup(newUser)
    }
}