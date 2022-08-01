import { user } from ".."
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {
    private static TABLE_NAME = 'labook_users'

    async create({id, name, email, password}: any): Promise<void> {
        await UserDataBase.connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into(UserDataBase.TABLE_NAME)
    }
}