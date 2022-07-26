import { BaseDataBase } from "./BaseDataBase"
import { User } from "../types/user"

export class UserDataBase extends BaseDataBase {

    insertUser = async (user: User): Promise<void> => {
        await UserDataBase.connection.insert({
            name: user.name,
            email: user.email,
            password: user.password
        }).into('User_Arq')
    }
}