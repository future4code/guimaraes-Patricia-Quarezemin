import { request, Request, Response } from "express"
import { ProductsBusiness } from "../business/ProductsBusiness"
import { ProductId, ProductInputDTO, ProductName, ProductTags } from "../model/product"


const productsBusiness = new ProductsBusiness()

export class ProductController {
    async createProductsCatalog(req: Request, res: Response) {
        try {
            const { name, tags } = req.body

            const input: ProductInputDTO = {
                name: name,
                tags: tags
            }

            await productsBusiness.createProductsCatalog(input)
            res.status(201).send({ message: 'Produto registrado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    async getProductId(req: Request, res: Response) {
        try {
            const { id } = req.body

            const inputGetProduct: ProductId = {
                id: id
            }

            await productsBusiness.getProductId(inputGetProduct)
            res.status(200).send({ message: 'Produto encontrado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    async getProductName(req: Request, res: Response) {
        try {
            const { name } = req.body

            const inputGetName: ProductName = {
                name: name
            }

            await productsBusiness.getProductName(inputGetName)
            res.status(200).send({ message: 'Produto encontrado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }

    async getProductTags (req: Request, res: Response) {
        try {
            const { tags } = req.body

            const inputGetTags: ProductTags = {
                tags: tags
            }

            await productsBusiness.getProductTags(inputGetTags)
            res.status(200).send({ message: 'Produto encontrado com sucesso!' })
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}