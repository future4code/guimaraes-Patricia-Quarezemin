import { Request, Response } from 'express'
import { connection } from '../connection'
import { Product } from '../types'
import { v4 as generateId } from 'uuid'

export const productRegister = async (req: Request, res: Response) => {

    let statusCode = 400
    try {

        const newId = generateId()

        const { name, price, imageUrl } = req.body

        const newProduct: Product = {
            id: newId,
            name,
            price,
            imageUrl
        }
        await connection("labecommerce_products")
            .insert(newProduct)

        res.status(200).send('Produto cadastrado com sucesso!')

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}