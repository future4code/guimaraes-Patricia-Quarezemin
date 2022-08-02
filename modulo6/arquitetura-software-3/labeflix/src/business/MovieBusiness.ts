import { MovieDataBase } from "../data/MovieDataBase"
import { v4 as generateId } from 'uuid'
import { MovieInputDTO } from "../model/MovieInputDTO"

export class MovieBusiness {
    async create(input: MovieInputDTO): Promise<void> {

        const { title, description, durationInMinutes, yearOfRelease } = input

        if (!title || !description || !durationInMinutes || !yearOfRelease) {
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