import { UserDataBase } from "../data/UserDataBase"


export class UserBusiness {
    createUser = async( input: any ): Promise<void> => {
        try {
            
            const { name, email, password } = input
             
            if(!name || !email || !password) {
                throw new Error('Preencha os campos "name", "email" e "password"')
            }
    
            const useDataBase = new UserDataBase()

            await useDataBase.insertUser ({
                name,
                email,
                password
            })
    
            } catch (error: any) {
            throw new Error(error.message)
        }
    }
}