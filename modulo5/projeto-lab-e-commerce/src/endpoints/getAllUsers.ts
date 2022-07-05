import { Request, Response } from 'express'
import { connection } from '../connection'

export const getAllUsers = async(req: Request, res: Response): Promise<any> => {
    try {
        
        const { name } = req.body

        await connection("labecommerce_users")
        .select(name)

        res.status(200).send(`Usuário ${name} está cadastrado.`)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}