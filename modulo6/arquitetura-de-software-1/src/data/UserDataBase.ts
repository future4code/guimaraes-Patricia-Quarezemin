import { BaseDataBase } from "./BaseDataBase"
import { User } from "../types/user"

export class UserDataBase extends BaseDataBase {

    insertUser = async (user: User): Promise<void> => {

        try {
            await UserDataBase.connection.insert({
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')

        } catch (error: any) {
            throw new Error(error.message)
        }

    }
}