import { MovieDataBase } from "../data/MovieDataBase"
import { generateId } from "../services/generateId"
import { MovieInputDTO } from "../model/MovieInputDTO"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"

export class MovieBusiness {
    async create(input: MovieInputDTO): Promise<void> {
        try {

            const { title, description, durationInMinutes, yearOfRelease } = input

            if (!title || !description || !durationInMinutes || !yearOfRelease) {
                throw new InvalidRequest()
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

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);
            
        }

    }
}