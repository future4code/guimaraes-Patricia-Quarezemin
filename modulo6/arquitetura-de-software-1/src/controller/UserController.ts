import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'

export class UserController {

    createUser = async (req: Request, res: Response) => {
        try {

            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: 'Usuário criado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            
            const userBusiness = new UserBusiness()

            const userList = await userBusiness.getAllUsers()

            res.status(200).send(userList)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {

            const input = req.params.id

            const newUserList = new UserBusiness()
            await newUserList.deleteUser(input)

            res.status(200).send('Usuário deletado com sucesso!')
            
        } catch (error: any) {
            
        }
    }
}