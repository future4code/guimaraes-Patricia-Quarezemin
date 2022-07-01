import { Request, Response } from 'express'
import connection from '../connection'

export default async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {

       const result = await connection('User')
       .select()

        res.send(result)
    } catch (error) {
        res.status(500).send("Unexpected server error.")
    }
}