import { BaseDataBase } from "./BaseDataBase"
import { User } from "../types/user"

export class UserDataBase extends BaseDataBase {

    insertUser = async (user: User): Promise<void> => {

        try {
            await UserDataBase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    getAllUsers = async (): Promise<any> => {

        try {

            const result = await BaseDataBase.connection('User_Arq')
                .select('*')

            return result

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    deleteUser = async (id: string): Promise<any> => {
        try {

            await UserDataBase.connection.where({id})
            .from('User_Arq')
            .delete()

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}