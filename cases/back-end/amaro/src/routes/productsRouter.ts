import express from "express"
import { ProductController } from "../controller/ProductController"


export const productsRouter = express.Router()

const productsController = new ProductController()

productsRouter.post('/create', productsController.createProductsCatalog)
productsRouter.get('/:id', productsController.getProductId)
productsRouter.get('/name', productsController.getProductName)
productsRouter.get('/tags', productsController.getProductTags)