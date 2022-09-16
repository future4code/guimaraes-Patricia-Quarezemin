import { CustomError } from "../error/CustomError"
import { Product } from "../model/product"
import { BaseDatabase } from "./BaseDatabase"


export class ProductsDatabase extends BaseDatabase {
    private tableName = 'Catalog_Amaro'

    public createProductsCatalog = async (product: Product) => {
        try {
            await ProductsDatabase.connection
            .insert({
                id: product.id,
                name: product.name,
                tags: product.tags
            })
            .into(this.tableName)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}