import { Request, Response } from 'express'
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from '../model/PostInputDTO'

export class PostController {
    async create(req: Request, res: Response): Promise<void> {

        try {
            const { id, photo, description, type, createdAt, authorId } = req.body

            const input: PostInputDTO = {
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            }

            const postBusiness = new PostBusiness()
            postBusiness.create(input)

            res.status(201).send('Post criado com sucesso!')
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

    async getPostId(req: Request, res: Response): Promise<void> {
        
        const { id } = req.params
        
        try {
          

            // const queryResult: any = await 

            // const post: PostInputDTO = {
            //     id,
            //     photo: ,
            //     description,
            //     type,
            //     createdAt,
            //     authorId
            // }
        } catch (error: any) {
            
        }
    }
}