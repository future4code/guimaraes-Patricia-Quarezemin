import { UserDataBase } from "../data/UserDataBase"
import { CustomError } from "../error/CustomError";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidRequest } from "../error/InvalidRequest";
import { generateId } from "../services/GenerateId"

export class UserBusiness {
    async create(input: any) {
        try {
            const { name, email, password } = input

            const id: string = generateId()

            if(! email || !password) {
                throw new InvalidRequest();
                
            }

            if(password.length < 6) {
                throw new InvalidPassword();
                
            }

            const userDataBase = new UserDataBase()
            const newUser = {
                id,
                name,
                email,
                password
            }

            await userDataBase.insert(newUser)
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);
            
        }
    }
}