import { UserDataBase } from "../data/UserDataBase"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"
import { UserInputDTO } from "../model/UserInputDTO"
import { generateId } from '../services/generateId'

export class UserBussiness {
    async create(input: UserInputDTO): Promise<void> {

        try {
            const { name, email, password } = input
            if (!name || !email || !password) {
                throw new InvalidRequest()
            }

            const id = generateId()

            const userDataBase = new UserDataBase()
            await userDataBase.create({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);
            
        }
    }
}