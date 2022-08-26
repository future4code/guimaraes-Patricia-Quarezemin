import { UserDataBase } from "../data/UserDataBase"
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidRequest } from "../error/InvalidRequest";
import { IdGenerator } from "../services/IdGenerator"

const idGenerator = new IdGenerator()

export class UserBusiness {

    async signup(input: any) {
        try {
            const { name, email, password } = input

            const id: string = idGenerator.generateId()
            // const authenticator = 

            if(! email || !password) {
                throw new InvalidRequest();
                
            }

            if(!email.includes('@')) {
                throw new InvalidEmail();
                
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