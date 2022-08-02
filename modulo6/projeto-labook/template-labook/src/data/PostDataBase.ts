import { BaseDataBase } from "./BaseDataBase"

export class PostDataBase extends BaseDataBase {
    private static TABLE_NAME = 'labook_posts'

    async create({photo, description, type, createdAt}: any): Promise<void> {
        await PostDataBase.connection
        .insert({
            photo,
            description,
            type,
            createdAt
        })
        .into(PostDataBase.TABLE_NAME)
    }
}