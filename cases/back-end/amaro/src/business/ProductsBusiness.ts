import { ProductsDatabase } from "../data/ProductsDatabase"
import { InvalidId } from "../error/InvalidId"
import { InvalidName } from "../error/InvalidName"
import { InvalidTags } from "../error/InvalidTags"
import { ProductInputDTO, Product, ProductId, ProductName, ProductTags } from "../model/product"
import { IdGenerator } from "../services/IdGenerator"

const productsDatabase = new ProductsDatabase()

export class ProductsBusiness {
    createProductsCatalog = async (input: ProductInputDTO, products: ProductInputDTO) => {

        const { name, tags } = input

        if (!name) {
            throw new InvalidName();
        }

        if (!tags) {
            throw new InvalidTags()
        }
        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()

        const newProduct = new Product(
            id,
            products.name,
            products.tags
        )

        await productsDatabase.createProductsCatalog(newProduct)
    }

    getProductId = async (input: ProductId) => {
        const { id } = input

        if (!id) {
            throw new InvalidId();
        }
        const productId = await productsDatabase.getProductsId(id)
        return productId
    }

    getProductName = async (input: ProductName) => {
        const { name } = input
        const productName = await productsDatabase.getProductName(name)
        return productName
    }

    getProductTags = async (input: ProductTags) => {
        const { tags } = input
        const productTags = await productsDatabase.getProductTags(tags)
        return productTags
    }
}