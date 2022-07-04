import { Request, Response } from 'express'
import { connection } from '../../connection'
import { User } from '../types'

export const insertUser = async(req: Request, res: Response) => {
    try {

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

        // const users: User = {
        //     id: 
        // }
        
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
} 