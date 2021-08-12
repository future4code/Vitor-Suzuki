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

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDataBase.connection('cookenu_users')
            .select('*')
            .where({ email });
            
            return user[0] && User.toUserModel(user[0])
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}