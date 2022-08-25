import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/User"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase {
    private tableName = 'labook_users'

    async insert(input: UserInputDTO) {
        try {
            await BaseDataBase.connection(this.tableName)
            .insert({
                id: input.id,
                name: input.name,
                email: input.email,
                password: input.password
            })
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);
            
        }
    }
}