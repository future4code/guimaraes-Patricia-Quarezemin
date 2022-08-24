import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'
import { MovieInputDTO } from '../model/MovieInputDTO'

export class MovieController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, durationInMinutes, yearOfRelease } = req.body

            const input: MovieInputDTO = {
                title,
                description,
                durationInMinutes,
                yearOfRelease
            }

            const movieBusiness = new MovieBusiness()
            movieBusiness.create(input)

            res.status(201).send('Filme cadastrado com sucesso!')
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}