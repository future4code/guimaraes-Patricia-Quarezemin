import { Request, Response } from 'express'
import { UserBussiness } from '../business/UserBusiness'

export class UserController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            
            const { name, email, password } = req.body

            const userBusiness = new UserBussiness()
            userBusiness.create({ name, email, password })

            res.status(201).send('Usuário criado com sucesso!')
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}