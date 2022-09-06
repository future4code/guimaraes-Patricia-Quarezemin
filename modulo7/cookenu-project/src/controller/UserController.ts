import { Request, Response } from 'express'
import { UserBusiness } from "../business/UserBusiness"
import { LoginInputDTO, UserInputDTO } from '../model/User'

export class UserController {
    async signup(req: Request, res: Response): Promise<void> {

        try {
            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res.status(201).send({message: 'Sucess, created user!', token})
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }

    async login(req: Request, res: Response): Promise<void> {

        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)

            res.status(200).send({token})
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
}