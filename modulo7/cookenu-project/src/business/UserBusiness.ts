import { UserDataBase } from "../data/UserDataBase"
import { InvalidRequest } from "../error/InvalidRequest";
import { generateId } from "../services/GenerateId"

export class UserBusiness {
    async create(input: any) {
        try {
            const { email, password } = input

            const id: string = generateId()

            if(! email || !password) {
                throw new InvalidRequest();
                
            }

            if(password < 6) {
                throw new Error("");
                
            }
        } catch (error: any) {
            
        }
    }
}