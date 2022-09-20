import { CustomError } from "../error/CustomError"
import { Product, ProductId, ProductInputDTO } from "../model/product"
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

    public getProductsId = async (id: string) => {
        try {
            const result = await ProductsDatabase.connection()
                .select("*")
                .from(this.tableName)
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, 'error.message')
        }
    }

    public getProductName = async (name: string) => {
        try {
            const result = await ProductsDatabase.connection()
                .select("*")
                .from(this.tableName)
                .where({ name })
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, 'error.message')
        }
    }

    public getProductTags = async (tags: []) => {
        try {
            const result = await ProductsDatabase.connection()
                .select("*")
                .from(this.tableName)
                .where({ tags })
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, 'error.message')
        }
    }
}