import { MovieDataBase } from "../data/MovieDataBase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
    async create({title, description, durationInMinutes, yearOfRelease}: any): Promise<void> {
        if(! title || !description || !durationInMinutes || !yearOfRelease) {
            throw new Error('Dados inválidos!')            
        }

        const id = generateId()

        const movieDataBase = new MovieDataBase()
        await movieDataBase.create({
            id,
            title,
            description,
            durationInMinutes,
            yearOfRelease
        })
    }
}