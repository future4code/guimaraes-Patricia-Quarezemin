import { UserDataBase } from "../data/UserDataBase"
import { v4 as generateId } from 'uuid'

export class UserBussiness {
    async create({name, email, password}: any): Promise<void> {
        if(!name || !email || !password) {
            throw new Error('Dados inválidos!')
        }

        const id = generateId()

        const userDataBase = new UserDataBase()
        await userDataBase.create({
            id,
            name,
            email,
            password
        })
    }
}