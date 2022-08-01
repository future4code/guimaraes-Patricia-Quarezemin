import { Request, Response } from 'express'
import { connection } from '../connection'

export const getAllUsers = async(req: Request, res: Response): Promise<any> => {
    
    let statusCode = 400

    try {
        
        const result = await connection("labecommerce_users")
        .select("name")

        res.status(200).send(result)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}