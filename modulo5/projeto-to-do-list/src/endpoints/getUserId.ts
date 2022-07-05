import { Request, Response } from 'express'
import connection from '../connection'

export default async function getUserId(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const result = await connection('User')
        .select('name')
        .where({
            id: req.params.id
        });
          
        res.send(result)

    } catch (error: any) {
        res.status(500).send('Unexpected server error.')
    }
}