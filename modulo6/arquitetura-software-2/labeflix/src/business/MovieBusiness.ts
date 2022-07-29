import { MovieDataBase } from "../data/MovieDataBase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
    async create({id, title, description, duration_in_minutes, year_of_release}: any): Promise<void> {
        if(! title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error('Dados inválidos!')
        }

        const newId = generateId()

        const movieDataBase = new MovieDataBase()
        await movieDataBase.create({
            newId,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}