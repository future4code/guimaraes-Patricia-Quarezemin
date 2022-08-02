import { PostDataBase } from "../data/PostDataBase"
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { PostInputDTO } from "../model/PostInputDTO";
import { generateId } from "../services/generateId"

export class PostBusiness {
    async create(input: PostInputDTO): Promise<void> {

        try {
            const { photo, description, type, createdAt, authorId } = input

            if (!photo || !description || !type || !createdAt || !authorId) {
                throw new InvalidRequest()
            }

            const id: string = generateId()

            const postDataBase = new PostDataBase()
            await postDataBase.create({
                id,
                photo,
                description,
                type,
                createdAt,
                authorId
            })
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);
            
        }

    }
}
