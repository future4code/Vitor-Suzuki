import { UserInputDTO } from "../model/user";
import { BaseDataBase } from "./BaseDataBase";

export class UserDatabase extends BaseDataBase {

    private static TABLE_NAME = "cubo_users"

    async signup(user: UserInputDTO) {
        await this.getConnection()
            .insert(user)
            .into(UserDatabase.TABLE_NAME)
    }

} 