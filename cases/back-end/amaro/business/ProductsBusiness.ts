import { ProductsDatabase } from "../data/ProductsDatabase"
import { ProductInputDTO, Product } from "../model/product"
import { IdGenerator } from "../services/IdGenerator"

const productsDatabase = new ProductsDatabase()

export class ProductsBusiness {
    createProductsCatalog = async (products: ProductInputDTO) => {
        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const newProduct = new Product(
            id,
            products.name,
            products.tags
        )

        await productsDatabase.createProductsCatalog(newProduct)
        
    }
}