import { Request, Response } from 'express'
import connection from '../connection'

export default async function getUserId(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const { id } = req.params
        const result: any = await connection.raw(`
    SELECT id FROM User
   `)
        res.send(result[id])

    } catch (error: any) {
        res.status(500).send('Unexpected server error.')
    }
}