import { UserInputDTO } from "../../model/types";
import { BaseDataBase } from "../BaseDataBase";

export class UserDataBase extends BaseDataBase {

    private static TABLE_NAME = "labook_users"

    async create(user: UserInputDTO) {
        await this.getConnection()
            .insert(user)
            .into(UserDataBase.TABLE_NAME)
    }

    async selectByEmail({ email }: any) {
        const result = await this.getConnection()
            .select('*')
            .from(UserDataBase.TABLE_NAME)
            .where({ email })

        return result[0]
    }
}