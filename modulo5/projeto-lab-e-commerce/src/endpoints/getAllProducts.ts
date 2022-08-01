import { Request, Response } from 'express'
import { connection } from '../connection'

export const getAllProducts = async(req: Request, res: Response) => {

    let statusCode = 400

    try {
        
        const result = await connection("labecommerce_products")
        .select('name')

        res.status(200).send(result)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}