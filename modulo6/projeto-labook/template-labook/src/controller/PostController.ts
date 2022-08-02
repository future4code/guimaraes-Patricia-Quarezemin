import { Request, Response } from 'express'
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from '../model/PostInputDTO'

export class PostController {
    async create(req: Request, res: Response): Promise<void> {

        try {
            const { photo, description, type, createdAt } = req.body

            const input: PostInputDTO = {
                photo,
                description,
                type,
                createdAt
            }

            const postbusiness = new PostBusiness()
            postbusiness.create(input)

            res.status(201).send('Post criado com sucesso!')
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }
}