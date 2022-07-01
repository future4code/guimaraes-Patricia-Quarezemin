import { Request, Response } from 'express'
import connection from '../connection'

export default async function getTaskId(
    req: Request,
    res: Response
): Promise<void>{
    try {
        
        const result = await connection('Task')
        .select('title')
        .where({
           id: req.params.id
        })

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send('Something weng wrong.')
    }
}