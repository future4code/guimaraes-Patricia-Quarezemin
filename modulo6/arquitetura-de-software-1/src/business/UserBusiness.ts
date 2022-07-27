import { UserDataBase } from "../data/UserDataBase"


export class UserBusiness {
    createUser = async (input: any): Promise<void> => {
        try {

            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error('Preencha os campos "name", "email" e "password"')
            }

            const id: string = Date.now().toString()

            const useDataBase = new UserDataBase()

            await useDataBase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    getAllUsers = async (): Promise<any> => {
        try {

            return await new UserDataBase().getAllUsers()
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    deleteUser = async (id: string): Promise<void> => {
        try {

            if(!id) {
                throw new Error('"Id" não encontrado!')
            }

            const userDelete = new UserDataBase()
            
            return await userDelete.deleteUser(id)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}