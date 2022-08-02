import { Request, Response } from 'express'
import { UserBussiness } from '../business/UserBusiness'
import { UserInputDTO } from '../model/UserInputDTO'

export class UserController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            
            const { name, email, password } = req.body

            const input: UserInputDTO = {
                name,
                email,
                password
            }

            const userBusiness = new UserBussiness()
            userBusiness.create(input)

            res.status(201).send('Usuário criado com sucesso!')
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}