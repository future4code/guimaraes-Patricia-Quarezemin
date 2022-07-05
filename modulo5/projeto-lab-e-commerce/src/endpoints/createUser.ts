import { Request, Response } from 'express'
import { connection } from '../connection'
import { User } from '../types'
import { v4 as generateId} from 'uuid'

export const createUser = async(req: Request, res: Response): Promise<any> => {
    try {

        const newId = generateId()

        const { name, email, password } = req.body

        const [user] = await connection("labecommerce_users")
        .where({email: email})

        if(user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado')
        }

        if(password.length < 6) {
            res.statusCode = 422
            throw new Error ('A senha deve ter no mínimo seis caracteres!')
        }

        if(!name || !email || !password) {
            res.statusCode = 406
            throw new Error("'name', 'email' e 'password' são obrigatórios!")
        }

        if(!email.includes("@") ||!email.includes(".com")) {
            res.statusCode = 406
            throw new Error(`O campo do email deve conter um "@" e um ".com"`)
        }

        const users: User = {
            id: newId,
            name,
            email,
            password
        }
        await connection("labecommerce_users")
        .insert(users)
        
        res.status(200).send('Usuário cadastrado com sucesso!')

    } catch (error: any) {
        res.status(500).send(error.message)
    }
} 