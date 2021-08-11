import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class SignUpDataBase extends BaseDataBase {
    public async insertUser(user: User) {
        await BaseDataBase.connection
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        .into('cookenu_users')
    }
}