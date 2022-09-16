import express from "express"
import { ProductController } from "../controller/ProductController"


export const productsRouter = express.Router()

const productsController = new ProductController()

productsRouter.post('/create', productsController.createProductsCatalog)