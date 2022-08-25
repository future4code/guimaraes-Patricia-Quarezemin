import { Request, Response } from 'express'
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    async create(req: Request, res: Response): Promise<void> {

        try {
            let message: 'Sucess, created user!'
            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.create(input)

            res.status(201).send()
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
}