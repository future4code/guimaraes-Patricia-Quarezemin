import { Request, Response } from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
import { ProductInputDTO } from "../model/product"


const productsBusiness = new ProductsBusiness()

export class ProductController {
    async createProductsCatalog (req: Request, res: Response) {
        try {
            const { name, tags } = req.body

            const input: ProductInputDTO = {
                name: name,
                tags: tags
            }

            await productsBusiness.createProductsCatalog(input)
            res.status(201).send({ message: 'Produto registrado com sucesso!'})
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}