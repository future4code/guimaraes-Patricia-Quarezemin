import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'

export class MovieController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            
            const { title, description, durationInMinutes, yearOfRealease } = req.body

            const movieBusiness = new MovieBusiness()
            await movieBusiness.create({title, description, durationInMinutes, yearOfRealease})

            res.status(201).send('Filme cadastrado com sucesso!')
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}