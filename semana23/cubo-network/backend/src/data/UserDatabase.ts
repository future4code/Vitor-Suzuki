import { UserInputDTO } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "cubo_users"

    async signup(user: UserInputDTO) {
        await this.getConnection()
            .insert(user)
            .into(UserDatabase.TABLE_NAME)
    }

    async getAllUsers() {
        return await this.getConnection()
            .select('*')
            .from(UserDatabase.TABLE_NAME)
    }

    async getTotalParticipation() {
        return await this.getConnection().raw(`
            SELECT SUM(participation) AS totalParticipation
            FROM ${UserDatabase.TABLE_NAME}
        `)
    }
} 