import { BaseDatabase } from "./BaseDatabase"

export class MovieDataBase extends BaseDatabase {
    private static TABLE_NAME = 'LABEFLIX_MOVIE'

    async create({id, title, description, durationInMinutes, yearOfRelease}: any): Promise<void> {
        await MovieDataBase.connection
        .insert({
            id,
            title,
            description,
            durationInMinutes,
            yearOfRelease
        })
        .into(MovieDataBase.TABLE_NAME)
    }
}