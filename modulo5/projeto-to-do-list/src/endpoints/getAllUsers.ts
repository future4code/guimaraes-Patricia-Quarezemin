import { Request, Response } from 'express'
import connection from '../connection'
import { user } from '../types'

export default async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const name = req.query

        const users: user[] = await connection('user')

        res.send(users)
    } catch (error) {
        res.status(500).send("Unexpected server error.")
    }
}